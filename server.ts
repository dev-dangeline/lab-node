import express from 'express';
import dotenv from 'dotenv'
dotenv.config();


const app = express();

app.get('/', async (request, response) => {
  response.send(`Running`)
});


app.get('/:envs', async (request, response) => {

  
  response.send({
   DATABASE_URL: process.env.DEBENTURISTAS_DATABASE_URL_DEV || "NOT",
   DB_PASS: process.env.DEBENTURISTAS_DATABASE_PASS_DEV || "NOT",
   DB_USER:  process.env.DEBENTURISTAS_DATABASE_USER_DEV || "NOT",
   JWT_TOKEN: process.env.JWT_TOKEN_DEV || "NOT",
   NOTIFICATION_SERVICE_API_KEY: process.env.NOTIFICATION_SERVICE_API_KEY_DEV || "NOT"
    
  })
});

app.listen(80, () => {
  console.log('Server is running!');
});
