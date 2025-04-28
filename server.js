const express = require('express');
const app = express();
app.use(express.json());

let tasks = [];

app.post('/task', (req, res) => {
    const task = req.body.task;
    if (!task) return res.status(400).send('Task is required');
    tasks.push(task);
    res.status(201).send('Task added');
});

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.delete('/task/:index', (req, res) => {
    const index = req.params.index;
    if (index >= tasks.length) return res.status(400).send('Invalid Index');
    tasks.splice(index, 1);
    res.send('Task deleted');
});

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
module.exports = app;
