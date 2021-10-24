const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.set('json spaces', 2);

app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api1', (req, res) => {

    var postbody = {
            "query":"hamburger",
            "timezone": "US/Eastern"
    }

    axios({
        method: 'post',
        url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
        headers: {
        'Content-Type': 'application/json',
        'x-app-id': process.env.API_ID,
        'x-app-key': process.env.API_key,
        'x-remote-user-id': process.env.API_USER_ID,
        },
        data: postbody,
      })
    .then((result) => {
        res.json(result.data.foods[0]);
    })
    .catch((error) => {
        console.error(error);
        res.send('An error occured.');
    })
});

module.exports = app;