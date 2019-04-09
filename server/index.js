const express = require('express');
// const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const axios = require('axios');

const axios3004 = axios.create({
  baseURL: 'http://localhost:3004',
});
const axios3005 = axios.create({
  baseURL: 'http://localhost:3005',
});

// app.use(morgan('dev'));
app.use('/restaurants/:id', express.static(path.join(__dirname, '../public')));

app.get('/api/restaurants/:id/menus', (req, res) => {
  axios3004.get(`/api/restaurants/${req.params.id}/menus`)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
});

app.get('/api/restaurants/:id/menus/:menu', (req, res) => {
  axios3004.get(`/api/restaurants/${req.params.id}/menus/${req.params.menu}`)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
});

app.get('/api/restaurants/:id/info', (req, res) => {
  axios3005.get(`/api/restaurants/${req.params.id}/info`)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
});

app.get('/api/restaurants/:id/overview', (req, res) => {
  axios3005.get(`/api/restaurants/${req.params.id}/overview`)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});