const request = require('supertest');
const app = require('./server');

describe('Task API', () => {
    it('should add a task', async () => {
        const res = await request(app).post('/task').send({ task: 'Test Task' });
        expect(res.statusCode).toEqual(201);
    });

    it('should fetch tasks', async () => {
        const res = await request(app).get('/tasks');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });

    it('should delete a task', async () => {
        await request(app).post('/task').send({ task: 'Task to delete' });
        const res = await request(app).delete('/task/0');
        expect(res.statusCode).toEqual(200);
    });
});
