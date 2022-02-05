//import express from 'express';
const express = require('express')
const my_app = express();

my_app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = my_app;
