import express from 'express';
import auth from './routes/auth.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use('/api/auth', auth);

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
