const auth = require("./router/auth");
const order = require("./router/order");
const user = require("./router/user");
const user = require("./router/product");
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', auth);
app.use('/order', order);
app.use('/user', user);
app.use('/product', product);

var server = app.listen(3000, () => console.log(`Server is starting at port ${3000}`));
