const auth = require("./router/auth");
const order = require("./router/order")
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', auth);
app.use('/order', order);


var server = app.listen(3000, () => console.log(`Server is starting at port ${3000}`));
