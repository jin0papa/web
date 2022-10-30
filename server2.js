const http = require('http');
var fs = require('fs');
var url = require('url');

const server = http.createServer((req, res) => {
    
    
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    console.log(_url);
    
    if(_url == '/' || _url == ' ' || _url == '//'){
      // title='Welcome';
      _url = '/index.html';
    }
     if(_url == '/favicon.ico'){
      // title='unWelcome';
      return res.writeHead(404);
    } 
    res.writeHead(200);
    console.log(__dirname + url);
    res.end(queryData.id);

    
    /* res.write('<h1>hello node</h1>');
    res.write('<p>hello server</p>');
    res.end('<p>hello</p>');  */
})
    .listen(8080);

server.on('listening', () => {
    console.log('8080번에서 대기중입니다.');
});
server.on('error', (error) => {
    console.error(error);
});