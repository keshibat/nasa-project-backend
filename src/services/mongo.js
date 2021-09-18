const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://admin:Secret1.0@nasacluster.d8thx.mongodb.net/nasa?retryWrites=true&w=majority'


mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!')
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
}