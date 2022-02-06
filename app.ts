const port = 3000;
import app from "./hello";

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
