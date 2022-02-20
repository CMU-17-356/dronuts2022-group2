import app from './hello';
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
