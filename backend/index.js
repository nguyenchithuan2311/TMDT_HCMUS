const auth = require("./router/auth");
const point = require("./router/point");
const user = require("./router/user");
const category = require("./router/category");
const product = require("./router/product");
const order = require("./router/order");
const cart = require("./router/cart");
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');

var router = express.Router();
app.use(cors()) // Use this after the variable declaration

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/auth', auth);
app.use('/point', point);
app.use('/user', user);
app.use('/category', category);
app.use('/product', product);
app.use('/order', order);
app.use('/cart', cart);

var server = app.listen(4000, () => console.log(`Server is starting at port ${4000}`));
