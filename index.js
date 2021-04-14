const express = require('express')
const cors = require('cors');
const crypto = require("crypto");
const app = express()
const port = 3001

app.use(cors());
app.get('/', (req, res) => {
    let x = generateRandomNumber(51.505,52.505);
    let y = generateRandomNumber(-0.05, -0.09)
    var id = crypto.randomBytes(20).toString('hex');
    res.send([x,y,id])
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})


function generateRandomNumber(min, max) {
    let highlightedNumber = (Math.random() * (max - min) + min).toFixed(3);
    return highlightedNumber;
};