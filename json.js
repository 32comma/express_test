// index.js file
var express = require('express');
var http = require('http');
var app = express();





app.set('port', process.env.PORT || 3000)

app.use(function (req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함');
    res.send({ name: 'csh', age: 33 })
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('익스프레스 서버를 시작했습니다 : ' + app.get('port'))
});