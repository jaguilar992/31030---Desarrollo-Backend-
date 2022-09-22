const mongoose = require('mongoose');

//  function to connect to the database
const connect = async () => {
  await mongoose.connect('mongodb://localhost:27017/plataforma');
};

module.exports = { connect };