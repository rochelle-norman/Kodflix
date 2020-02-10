
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const express = require('express')
const movieList = require('./movielist')
const path = require('path')

const listOfMovies = movieList;
const app = express()
const port = process.env.PORT || 3001;

app.get('/rest/movies', (req, res) => {
    res.send(listOfMovies);
});

app.use(express.static(path.join(__dirname, '../../build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));