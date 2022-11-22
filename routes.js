const express = require('express'); 
const app = express.Router();
const Sendmail = require('./controllers/sendmail.Controller')
var cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get('/',Sendmail.Dashboard)
app.get('/dashboard',Sendmail.SendMail)
app.get('/products',)



module.exports = app;