const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
const fs = require('fs')
const port = 3001;
app.get('/getCarRoutes', (req, res) => {
    const files = fs.readdirSync('./Input')

    const carRoutes = files.map(file => JSON.parse(fs.readFileSync(`./Input/${file}`)))
    res.set('Access-Control-Allow-Origin', '*')
    res.send(carRoutes);
})

app.listen(port, () => {
    console.log('running')
})