const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../../src/app');
const Bug = require('../../src/models/Bug');

describe('Bug API', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  afterEach(async () => {
    await Bug.deleteMany();
  });

  it('should create a bug', async () => {
    const res = await request(app)
      .post('/api/bugs')
      .send({ title: 'Bug1', description: 'Desc1' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Bug1');
  });

  it('should get all bugs', async () => {
    await Bug.create({ title: 'Bug2', description: 'Desc2' });
    const res = await request(app).get('/api/bugs');
    expect(res.body.length).toBe(1);
    expect(res.body[0].title).toBe('Bug2');
  });

  it('should update a bug', async () => {
    const bug = await Bug.create({ title: 'Bug3', description: 'Desc3' });
    const res = await request(app)
      .put(`/api/bugs/${bug._id}`)
      .send({ status: 'resolved' });
    expect(res.body.status).toBe('resolved');
  });

  it('should delete a bug', async () => {
    const bug = await Bug.create({ title: 'Bug4', description: 'Desc4' });
    const res = await request(app).delete(`/api/bugs/${bug._id}`);
    expect(res.body.message).toBe('Bug deleted');
  });
}); 