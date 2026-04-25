import './processors/mailProcessor.js';

import express from 'express';
import { StatusCodes } from 'http-status-codes';

import serverAdapter from './config/bullBoardConfig.js';
import connectDB from './config/dbConfig.js';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/apiRouter.js';

const app = express();

app.use('/ui', serverAdapter .getRouter());

app.use(express.json()); // To parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded request bodies (e.g., form submissions)
app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
  return res.status(StatusCodes.OK).json({ message: 'pong' });
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});