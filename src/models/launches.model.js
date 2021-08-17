const launches = new Map();

const lanuch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchData: new Date('December 27, 2030'),
  destination: 'Kepler-442 b',
  customer: ['TESLA', 'NASA'],
  upcoming: true,
  success: true,
};

launches.set(lanuch.flightNumber, lanuch);

module.exports = {
  launches,
}