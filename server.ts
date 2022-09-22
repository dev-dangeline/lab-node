import express from 'express';


const app = express();

app.get('/', async (request, response) => {
  response.send('Running')
});


app.listen(80, () => {
  console.log('Server is running!');
});