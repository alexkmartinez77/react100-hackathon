//require files
const express = require('express');
const axios = require('axios');
require('dotenv').config();
const bodyParser = require('body-parser');

//app proxy server
const app = express();

//for development
app.set('json spaces', 2);

//middleware
app.use(express.static('dist'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

//gather nutrient info
app.get('/nutrients/:foodItem', (req, res) => {
    
    nutrientQuery = {
        'query': req.params.foodItem,
    };
   
    axios({
        method: 'post',
        url: 'https://trackapi.nutritionix.com/v2/natural/nutrients/',
        headers: {
        'Content-Type': 'application/json',
        'x-app-id': process.env.API_ID,
        'x-app-key': process.env.API_key,
        'x-remote-user-id': process.env.API_USER_ID,
        },
        data: nutrientQuery,
      })
    .then((result) => {
        res.json(result.data.foods[0]);
    })
    .catch((error) => {
        console.error(error);
        res.send('An error occured.');
    })

});

//gather excercise info
app.get('/exercise', (req, res) => {

    axios({
        method: 'post',
        url: 'https://trackapi.nutritionix.com/v2/natural/exercise',
        headers: {
        'Content-Type': 'application/json',
        'x-app-id': process.env.API_ID,
        'x-app-key': process.env.API_key,
        'x-remote-user-id': process.env.API_USER_ID,
        },
        data: exerciseQuery,
      })
    .then((result) => {
        res.json(result.data);
    })
    .catch((error) => {
        console.error(error);
        res.send('An error occured.');
    })

});

module.exports = app;