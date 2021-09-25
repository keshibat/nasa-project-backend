const http = require('http');
const mongoose = require('mongoose');


const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.model');

const PORT = process.env.PORT || 8000;

const MONGO_URI = 'mongodb+srv://admin:Secret1.0@nasacluster.d8thx.mongodb.net/nasa?retryWrites=true&w=majority';

const server = http.createServer(app);

mongoose.connection.once('open', () => {
  console.log('MongoDB connection is ready!')
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function StartServer() {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
  });
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
  await loadLaunchData();
}

StartServer();