const express = require('express');        // call express
const app = express(); 
const expressLayouts = require('express-ejs-layouts');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static('static'));

app.get("/login", function(req, res){
    res.render('login', {
        title: 'fourflix',
        description: 'this is fourflix page'
    })
});
app.get("/signin", function(req, res){
    res.render('signin', {
        title: 'fourflix',
        description: 'this is fourflix page'
    })
});
app.get("/mate", function(req, res){
    res.render('mate', {
        title: 'fourflix',
        description: 'this is fourflix page'
    })
});
app.get("/community", function(req, res){
    res.render('community', {
        title: 'fourflix',
        description: 'this is fourflix page'
    })
});
app.get("/mypage", function(req, res){
    res.render('mypage', {
        title: 'fourflix',
        description: 'this is fourflix page'
    })
});
// Save our port
var port = process.env.PORT || 3000;

// Start the server and listen on port 
app.listen(port, function () {
    console.log("Live on port: " + port);
});