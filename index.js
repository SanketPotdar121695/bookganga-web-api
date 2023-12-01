// Importing all the required stuff
const cors = require('cors');
const express = require('express');
const { PORT, connection } = require('./config/db');
const { bookRouter } = require('./routes/book.routes');

const app = express();

// In-built middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.status(200).send('<h1>Welcome to the BookGanga Web API !!!</h1>');
});

app.use('/books', bookRouter);

// Listening to the server
app.listen(PORT, connection);
