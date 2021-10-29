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
app.get('/nutrients/:foodItem', function(req,res) {

    nutrientQuery = {
        'query': req.params.foodItem,
    };
   
    axios({
        method: 'post',
        url: 'https://trackapi.nutritionix.com/v2/natural/nutrients/',
        headers: {
        'Content-Type': 'application/json',
        'x-app-id': process.env.NUTRITIONIX_API_ID,
        'x-app-key': process.env.NUTRITIONIX_API_KEY,
        'x-remote-user-id': process.env.NUTRITIONIX_API_USER_ID,
        },
        data: nutrientQuery,
      })
    .then((result) => {
        res.status(200).send(result.data.foods[0]);
    })
    .catch((error) => {
        console.error(error);
        res.send('An error occured.');
    })
});

//gather excercise info
app.post('/exercise', (req, res) => {
    
    axios({
        method: 'post',
        url: 'https://trackapi.nutritionix.com/v2/natural/exercise',
        headers: {
        'Content-Type': 'application/json',
        'x-app-id': process.env.NUTRITIONIX_API_ID,
        'x-app-key': process.env.NUTRITIONIX_API_KEY,
        'x-remote-user-id': process.env.NUTRITIONIX_API_USER_ID,
        },
        data: req.body,
      })
    .then((result) => {
        res.send(result.data);
    })
    .catch((error) => {
        console.error(error);
        res.send('An error occured.');
    })
});

//gather recipes
app.get('/recipes/:maxCalories', (req, res) => {
    let maxCalories = req.params.maxCalories;
    axios({
        method: 'get',
        url: `https://api.edamam.com/api/recipes/v2?app_key=${process.env.EDAMAM_API_KEY}&app_id=${process.env.EDAMAM_API_ID}&type=public&calories=${maxCalories}`,
      })
    .then((result) => {
        res.send(result.data);
    })
    .catch((error) => {
        console.error(error);
        res.send('An error occured.');
    })
});

module.exports = app;