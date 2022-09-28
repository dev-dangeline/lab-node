import express from 'express';
import dotenv from 'dotenv'
dotenv.config();


const app = express();

app.get('/', async (request, response) => {
  response.send(`Running`)
});


app.get('/:envs', async (request, response) => {

  
  response.send({
   DATABASE_URL: process.env.DATABASE_URL || "NOT",
   DB_PASS: process.env.DB_PASS || "NOT",
   DB_USER:  process.env.DB_USER || "NOT",
   JWT_TOKEN: process.env.JWT_TOKEN || "NOT",
   NOTIFICATION_SERVICE_API_KEY: process.env.NOTIFICATION_SERVICE_API_KEY || "NOT"
    
  })
});

app.listen(80, () => {
  console.log('Server is running!');
});
