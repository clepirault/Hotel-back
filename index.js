const express = require('express');
require('dotenv').config();
const cors = require('cors');
const roomsRouter = require('./routes/rooms');
const mealsRouter = require('./routes/meals');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.use('/rooms', roomsRouter);
app.use('/meals', mealsRouter);

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
