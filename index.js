const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const users = require('./models/Users.json')

require('dotenv').config();
app.use(logger('dev'))
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/first', (req, res) => {
res.render('main/home', { name: 'Bill'});
})

app.get('/users', (req, res) => { 
    res.render('partials/users', {users})
})

app.get('/location/:color/:car', (req, res) => {
    const firstName = 'John';
    const lastName = 'Wick'
    let places = [{city: 'Stamford', state: 'Connecticut'}, {city: 'Rockville', state: 'Maryland'}, {city: 'Barnard', state: 'Kentucky'}]
    const {color, car} = req.params;
    res.render('main/location', {color, car, places, firstName, lastName});
})


app.listen(port, () => {
    console.log(`Listening port ${port}`)
})