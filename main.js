var http = require('http');
var fs = require('fs');
var url = require('url');

const app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    console.log(_url);
    
    if(_url == '/' || _url == ' ' || _url == '//'){
      // title='Welcome';
      _url = '/index.html';
    }
     if(_url == '/favicon.ico'){
      // title='unWelcome';
      return response.writeHead(404);
    } 
    response.writeHead(200);
    // console.log(__dirname + url);
    response.end(queryData.id);

});

app.listen(3000);