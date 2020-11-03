var express = require('express');

var app = express();
app.use(express.json())

const tasks = [
    {
        id: 1,
        title: 'Learn React',
        description: 'Learn how to use react in building web app'
    },
    {
        id: 2,
        title: 'Learn Node',
        description: 'Learn how to use node in building server'
    },
    {
        id: 3,
        title: 'Learn Array Manipulation',
        description: 'Learn how to manipulate arrays in javascript'
    }
];

app.get('/api/tasks', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(tasks);
})

app.get('/api/tasks/:id', function (req, res) {
    const task = tasks.filter(task => task.id == req.params.id)[0];
    res.header("Access-Control-Allow-Origin", "*");
    res.json(task);
})

app.post('/api/tasks', function (req, res) {
    
    const task = req.body;

    const id = Math.max.apply(Math, tasks.map(function(task) { return task.id; }))
    task.id = id + 1;
    res.header("Access-Control-Allow-Origin", "*");
    tasks.push(task);
    res.json(task);
})

app.put('/api/tasks/:id', function (req, res) {
    const task = tasks.filter(task => task.id == req.params.id)[0];
    res.header("Access-Control-Allow-Origin", "*");
    tasks[tasks.indexOf(task)] = req.body;
    res.json(tasks);
})

app.delete('/api/tasks/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const task = tasks.filter(task => task.id == req.params.id)[0];
    tasks.splice(tasks.indexOf(task), 1);
    res.json(tasks);
})

console.log(Math.max.apply(Math, tasks.map(function(task) { return task.id; })));

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://localhost:%s", port)
})