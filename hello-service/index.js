const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/hello', (req, res) => {
    res.status(200).send({
        message: 'Hello World'
    });
});

app.use((req, res) => {
    res.status(404).send({
        message: "not found"
    });
});

const server = app.listen(PORT, ()=>{
    console.log(`hello-service running on port: ${PORT}`);
});

module.exports = server;