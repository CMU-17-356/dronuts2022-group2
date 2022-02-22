import express = require('express');
import mongoose from 'mongoose';
import { DonutModel } from './frontend/database/schemas/donut_schema';
import 'dotenv/config';

const app = express();

mongoose.connect('mongodb+srv://dronuts:' + process.env.MONGO_PASSWORD + '@cluster0.qbzmg.mongodb.net/dronutsDB?retryWrites=true&w=majority');

app.get('/', (req:express.Request, res:express.Response) => {
  res.send('Hello World!');
});

app.post('/test', (req, res) => {
  const donut = new DonutModel({
    name: 'Chocolate',
    price: 1.69,
    description: 'Chocolate donut',
  });

  donut
      .save()
      .then((result: any) => {
        console.log(result);
        res.status(201).json({
          message: 'Handling POST requests to /products',
          createdProduct: result,
        });
      })
      .catch((err: any) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
});

app.get('/test', (req:express.Request, res:express.Response) => {
  DonutModel.find()
      .exec()
      .then((docs : any) => {
        console.log(docs);
        res.status(200).json(docs);
      })
      .catch((err : any) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
});

export default app;
module.exports = app;
