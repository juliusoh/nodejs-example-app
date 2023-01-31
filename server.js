import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();

const PORT = process.env.PORT;

// @route GET /status
// @desc Check server status
app.get('/status', (request, response) => {
  response.send({
    code: 200,
    success: true,
    message: 'Server is healthy',
  });
});

// @route GET /products
// @desc Get all products

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
