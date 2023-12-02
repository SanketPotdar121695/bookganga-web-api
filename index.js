// Importing all the required stuff
const cors = require('cors');
const express = require('express');
const { bookRouter } = require('./routes/book.routes');
const { PORT, connection, welcomeMessage } = require('./config/db');

const app = express();

// In-built middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.status(200).send(welcomeMessage);
});

app.use('/books', bookRouter);

// Listening to the server
app.listen(PORT, connection);
