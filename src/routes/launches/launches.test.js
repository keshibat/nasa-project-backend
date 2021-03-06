const request = require('supertest');
const app = require('../../app');


describe('Test GET /launches', () => {
  test('It should respond with 200 success', async () => {
    const response = await request(app)
    .get('/launches')
    .expect('Content-Type', /json/)
    .expect(200);
  });
});

describe('TEST POST /launch', () => {
  const completeLaunchData = {
    mission: 'USS Enterpirse',
    rocket: 'NCC 1701-D',
    target: 'Kepler-186 f',
    launchDate: 'January 4, 2028',
  }

  const launchDataWithoutDate = {
    mission: 'USS Enterpirse',
    rocket: 'NCC 1701-D',
    target: 'Kepler-186 f',
  }

  const launchDataWithInvalidDate = {
    mission: 'USS Enterpirse',
    rocket: 'NCC 1701-D',
    target: 'Kepler-186 f',
    launchDate: 'animal',
  }

  test('It should respond with 201 created', async () => {
    const response = await request(app)
      .post('/v1/launches')
      .send(completeLaunchData)
      .expect('Content-Type', /json/)
      .expect(201);
    const requestData = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();
    expect(requestData).toBe(responseDate);
    expect(response.body).toMatchObject(launchDataWithoutDate);
  });

  test('It should catch missing required properties', async () => {
    const response = await request(app)
      .post('/v1/launches')
      .send(launchDataWithoutDate)
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: 'Missing required launch property',
    });
  });

  test('It should catch invalid dates', async () => {
    const response = await request(app)
      .post('/v1/launches')
      .send(launchDataWithInvalidDate)
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: 'Invalid launch date',
    });
  });
});

