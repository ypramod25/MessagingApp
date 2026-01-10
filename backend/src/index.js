import express from 'express';
import { StatusCodes } from 'http-status-codes';

import connectDB from './config/dbConfig.js';
import { PORT } from './config/serverConfig.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));// to parse form data {extended: true} to parse nested objects

app.get('/ping', (req, res) => {
  return res.status(StatusCodes.OK).json({ message: 'pong' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});

