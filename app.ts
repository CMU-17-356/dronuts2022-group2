const port = 3000;
// import { hello } from "hello";
const app = require('./hello');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

module.exports = app;
