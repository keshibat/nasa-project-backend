const launches = new Map();

let latestFlightNumber = 100;

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

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    launch.flightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customer: ['TESLA', 'NASA'],
      flightNumber: latestFlightNumber,
    })
    );
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
}