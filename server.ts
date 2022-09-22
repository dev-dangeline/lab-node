import express from 'express';


const app = express();

app.get('/', async (request, response) => {
  response.send('Running')
});


app.listen(3333, () => {
  console.log('Server is running!');
});