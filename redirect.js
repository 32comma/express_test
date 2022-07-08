// index.js file
var express = require('express');
var http = require('http');
var app = express();



app.set('port', process.env.PORT || 3000)

app.use(function (req, res, next) {
    res.redirect('http://google.co.kr');
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('익스프레스 서버를 시작했습니다 : ' + app.get('port'))
});