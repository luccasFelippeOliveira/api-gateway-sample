const express = require('express');
const bodyParseer = require('body-parser');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParseer.json());
app.use(bodyParseer.urlencoded({ extended: true }));

// Routes.
app.get('/yes', (req, res) => {
    res.status(200).send(Math.random() >= 0.5 ? "yes" : "no");
});

app.get('/no', (req, res) => {
    res.status(200).send(Math.random() >= 0.5 ? "no": "yes");
});

app.use((req, res) => {
    res.status(404).send('Route not found.');
})

const server = app.listen(PORT, () => {
    console.log(`yes-no-service running on port ${PORT}`);
});

module.exports = server;