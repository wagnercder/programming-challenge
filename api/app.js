var express = require('express');
var bodyParser = require("body-parser");
const path = require('path');
var cors = require('cors');

/** configurations of express */
app = express();
app.use(bodyParser.json()); //parse json
app.use(bodyParser.urlencoded({ extended: true })); //enable parseJSon na url
app.use(cors());

var routers = require('./routes/route');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else next();

});

app.use(express.static("public"));

//Redirect to home
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

routers(app);

var server = app.listen(4000);
console.log('Server Express at port %s', server.address().port);
