const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

const config = require('./app/config/config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.disable('x-powered-by');
app.disable('etag');

app.use(express.static(path.resolve(__dirname, './app/public')));

app.set('views', path.resolve(__dirname, './app/views'));
let nunenv = nunjucks.configure(app.get('views'), {
    autoescape: true,
    express: app
});
app.set('view engine', 'njk');

//const routes = require('./app/routes/router');
//app.use('/', routes);

let port = config.port;
http.listen(port, function(){
    console.log(`Listening on ${port}`);
});