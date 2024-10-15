const express = require('express');
const app = express();

app.get('/tarefas', (req, res) => {
    res.send("ola ola ola")
})

app.post('/tarefas', (req, res) => {
});

app.listen(3000, function() {
    console.log("Server rondando...")
})