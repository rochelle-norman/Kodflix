const express = require('express')
const movieList = require('./movielist')
const path = require('path')
const app = express()
const port = process.env.PORT || 3001;

app.get('/rest/movies', (req, res) => {
    res.send(movieList);
});

app.use(express.static(path.join(__dirname, '../../build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));