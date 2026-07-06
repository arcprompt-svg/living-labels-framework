import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hello from port 8080'));

app.listen(8080, () => {
  console.log('Listening on http://localhost:8080');
});
