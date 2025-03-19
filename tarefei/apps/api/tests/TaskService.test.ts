import { describe, expect, it } from '@jest/globals';
import { TaskStatus } from '@prisma/client';
import request from 'supertest';
import { app } from '../src/app';

describe('General tests for Task Service', () => {
  it('should be able to create a new task with complete request', async() => {
    const response = await request(app)
    .post('/tasks')
    .send({
      name: 'New task test example',
      due_date: '2035-04-01',
      status: TaskStatus.HIGH
    })
    expect(response.status).toBe(201)
  }),

  it('should be able to create a new task with partial request', async() => {
    const response = await request(app)
    .post('/tasks')
    .send({
      name: 'New task test example',
      status: TaskStatus.HIGH
    })
    expect(response.status).toBe(201)
  }),

  it('should not be able to create a new task with past date', async() => {
    const response = await request(app)
    .post('/tasks')
    .send({
      name: 'New task test example',
      due_date: '2015-04-01',
      status: TaskStatus.HIGH
    })
    expect(response.status).toBe(400)
  }),

  it('should not be able to create a new task with invalid status', async() => {
    const response = await request(app)
    .post('/tasks')
    .send({
      name: 'New task test example',
      due_date: '2036-04-01',
      status: 'ERROR'
    })
    expect(response.status).toBe(400)
  }),

  it('should not be able to create a new task with not send required name', async() => {
    const response = await request(app)
    .post('/tasks')
    .send({
      due_date: '2038-04-01',
      status: TaskStatus.HIGH
    })
    expect(response.status).toBe(400)
  })
});
