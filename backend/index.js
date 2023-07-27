const auth = require("./router/auth");
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', auth);

var server = app.listen(3000, () => console.log(`Server is starting at port ${3000}`));
