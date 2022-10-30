const http = require('http');

http.createServer((req, res) => {
    res.write('<h1>hello node</h1>');
    res.write('<p>hello server</p>');
    res.end('<p>hello</p>');
})
    .listen(8080, () => {
        console.log('8080번 포트에 대기중입니다.');
    });