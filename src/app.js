const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');

const router = require('./router.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const app = express(); // name our instance of express

app.use(compression()); // compress requests --> little bit faster


// 1st - what to type in URL, 2nd - express.static(filepath)
app.use('/assets', express.static(path.resolve(`${__dirname}/../client/`)));

// set up body parse process
app.use(express.urlencoded({entended:true})); // allows us to send nested JSON objects across a form
app.use(express.json());

app.use(favicon(`${__dirname}/../client/img/favicon.png`));



router(app); // tell it to use a router (how we get to our various pages)



// we want app to listen for requests
app.listen(port, (err) => {
    //if there is an error use this callback fxn
    if(err){ throw err; }
    console.log(`Listening on port ${port}`); //127.0.0.1:?
})