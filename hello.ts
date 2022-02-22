import express = require('express');
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { DonutModel } from './frontend/database/schemas/donut_schema';
import { UserModel } from './frontend/database/schemas/user_schema';
import { OrderModel } from './frontend/database/schemas/order_schema';
import 'dotenv/config';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://dronuts:' + process.env.MONGO_PASSWORD + '@cluster0.qbzmg.mongodb.net/dronutsDB?retryWrites=true&w=majority');

app.get('/', (req:express.Request, res:express.Response) => {
  res.send('Hello World!');
});

/** Deletes an order from the database with the matching order.order_id.
 *
 * @param req.body is an orders object.
 */
app.post('/completed_order', (req: express.Request, res: express.Response) => {
  console.log(req.body);
  const order = req.body.order;

  OrderModel.deleteOne({order_id : {$eq: order.order_id}})
      .then((result: any) => {
        console.log(result);
        res.status(201).json({
          message: 'Handling POST requests to /completed_order',
          deletedOrder: result,
        });
      })
      .catch((err: any) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
});

/** Add a new order to the Orders collection in the DB.
 *
 * @param req.body is an orders object.
 */
app.post('/new_order', (req: express.Request, res: express.Response) => {
  console.log(req.body);
  const order = new OrderModel(
    req.body.order
  );

  order
      .save()
      .then((result: any) => {
        console.log(result);
        res.status(201).json({
          message: 'Handling POST requests to /new_order',
          addedOrder: order,
        });
      })
      .catch((err: any) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
});


/** Create a new user
 *
 * @param req.body Must be a user object.
 */
app.post('/new_user', (req: express.Request, res: express.Response) => {
  console.log(req.body);
  const user = new UserModel(
    req.body.user
  );

  user
      .save()
      .then((result: any) => {
        console.log(result);
        res.status(201).json({
          message: 'Handling POST requests to /new_user',
          addedUser: user,
        });
      })
      .catch((err: any) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
});

/** Get all donuts.
 *  @returns Status 200 and a list of Donuts.
 */
app.get('/donuts', (req: express.Request, res: express.Response) => {
  DonutModel.find()
      .exec()
      .then((donuts : any) => {
        console.log(donuts);
        res.status(200).json(donuts);
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
