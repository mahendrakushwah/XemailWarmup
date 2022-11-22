const express = require('express');
const appRoute = require('./routes');
const dotenv = require('dotenv').config()

const app = express();

app.set('view engine', 'ejs')
app.engine('ejs', require('ejs').__express)
app.set('views', './views')
app.use(express.static('public'))

app.use('/', appRoute)


app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
