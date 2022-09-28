import express from 'express';
import dotenv from 'dotenv'
dotenv.config();


const app = express();

app.get('/', async (request, response) => {
  response.send(`Running ${process.env.DATABASE_URL}`)
});



app.listen(80, () => {
  console.log('Server is running!');
});
