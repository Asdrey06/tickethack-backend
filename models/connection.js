const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:atRnHZgwwvazdPYb@cluster0.iiwn5v7.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))

  .catch(error => console.error(error));