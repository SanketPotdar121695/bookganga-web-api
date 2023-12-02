require('dotenv').config();
const { connect } = require('mongoose');

const PORT = process.env.PORT;
const welcomeMessage = process.env.welcomeNote;

const connection = async () => {
  try {
    await connect(process.env.mongoURL);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log('Something went wrong!', err.message);
  }
  console.log(`App is running on port ${PORT}`);
};

module.exports = { PORT, connection, welcomeMessage };
