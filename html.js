// index.js file
var express = require('express');
var http = require('http');
var app = express();



app.set('port', process.env.PORT || 3000)

app.use(function (req, res, next) {
    var userAgent = req.header('User-Agent');
    var paramName = req.query.name;
    res.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' })
    res.write('<h1>Express Server responsive result</h1>')
    res.write('<div><p>User-Agent : ' + userAgent + '</div>')
    res.write('<div><p>Param name : ' + paramName + '</div>')
    res.end();
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('익스프레스 서버를 시작했습니다 : ' + app.get('port'))
});