const hbs = require('express-handlebars');
const path = require('path');
const express = require('express');

const app = express();

const getDogs = require('./lib/gitWeather');

app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}));

app.set('view engine', '.hbs');

app.get('/', async(req, res) => {
    let data = await getDogs();
    console.log(data)
    
    //Call data here

    res.render('index', {});
})

app.listen(3000, () => {
    console.log('server on 3000.');    
})