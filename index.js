const express = require('express');
const app = express()
const path = require('path');
const {exec} = require('child_process');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/volup', (req, res) => {
    exec("pulsemixer --change-volume +5", (err, stdout, stderr) => {
        if (err) {
            console.log("error in volume increase");
            console.error(err)
        } else {
            console.log("Volume Increased");
            res.send("Volume Increased");
        }
    });
})

app.get('/voldown', (req, res) => {
    exec("pulsemixer --change-volume -5", (err, stdout, stderr) => {
        if (err) {
            console.log("error in volume decrease");
            console.error(err)
        } else {
            console.log("Volume Decreased");
            res.send("Volume Decreased");
        }
    });
})

const port = 3000

app.listen(port, '0.0.0.0', () => {
    console.log("Server running on port " + port);
})
