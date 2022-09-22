FROM node
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production


COPY . .

RUN npm run build

CMD [ "node", "server.js" ]