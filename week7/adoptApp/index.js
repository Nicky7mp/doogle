const hbs = require('express-handlebars');
const path = require('path');
const express = require('express');

const app = express();

const getDogs = require('./lib/adopt');

app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}));
app.set('view engine', '.hbs');

app.get('/', async(req, res) => {
    let data = await getDogs();

    console.log(data)

    let name = data.animals[0].name
    let age = data.animals[0].age
    let gender = data.animals[0].gender
    let breed = data.animals[0].breeds.primary
    
    res.render('index', {name, age, gender, breed});
})

app.listen(3000, () => {
    console.log('server on 3000.');
})

/**
 * request({
 * grant_type: client_credentials,
 * ...
 * uri: https://api.petfinder.com/v2/oauth2/token
 * })
 */

//curl -d "grant_type=client_credentials&client_id=CaXzjpBwLvup5MbsvGrj6o1XHB05AnTWSQnMNaJNOwNTBuYJiJ&client_secret=o6LAdeFpkgWYRUu0SJNKDbWPgW25CZI6kYkOpFlT" https://api.petfinder.com/v2/oauth2/token

//curl -H  "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZhYWJkMzYzOTk5ZjQyZThkZGIyMDY2ZDAzYzg4MTZiMTI3NzhkMThmNDFmNzQzOTBiZWU2MzRjZDM1YTczZjZkZTM1OTVkYWU1NzVlODEzIn0.eyJhdWQiOiJDYVh6anBCd0x2dXA1TWJzdkdyajZvMVhIQjA1QW5UV1NRbk1OYUpOT3dOVEJ1WUppSiIsImp0aSI6IjZhYWJkMzYzOTk5ZjQyZThkZGIyMDY2ZDAzYzg4MTZiMTI3NzhkMThmNDFmNzQzOTBiZWU2MzRjZDM1YTczZjZkZTM1OTVkYWU1NzVlODEzIiwiaWF0IjoxNTczNzUzMjg2LCJuYmYiOjE1NzM3NTMyODYsImV4cCI6MTU3Mzc1Njg4Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.zyZyzzvdVft3lpl5YZkyz5cONMGhFXohnT80axFv70dqyniDzLzX82tJEUo9YdtyiVIlBjFAepkx0b1Al9xfHFxjh0DJUcszwUhmChQg98hgm2WjL_x1qDaE4Re9sPmoIKk_pdEaTnz78hpudB2bV-8slccljJpX2FtTzrnN5p2Uac8xTIpHojjxMYVgw_IYB2918QKDviFy74wng7mueL-n57yKAt1nJRSOYBRgcMXqxlMM8tDt4JhriN8Rub9Q5hBHJLxdKr3Y7WgHETmXIkZjuj7bGU0Ji2hceXV7tcrLnBTDYOHVuh0QIqbcf6jYtpWM1TrltzXH_gJONwg7lQ" GET https://api.petfinder.com/v2/animals?type=dog&status=adoptable