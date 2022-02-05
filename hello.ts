//import express from 'express';
const express = require('express')
const myApp = express();

myApp.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = myApp;
