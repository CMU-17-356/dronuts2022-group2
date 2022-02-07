import express = require('express');
const app = express();

app.get('/', (req:express.Request, res:express.Response) => {
  res.send('Hello World!');
});

export default app;
module.exports = app;
