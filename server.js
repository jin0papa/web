const express = require('express');
const app = express();

app.get('/',function(요청,응답){
  // 응답.send('여기는 나의 작업용 페이지입니다.');
  응답.sendFile(__dirname + '/idx.html');
});

app.get('/about',(req,res)=>{
  res.send('여그는 어바웃페이지... 뭔가를 ..뭘 적지?');
});

app.listen(8000, function(){
  console.log('Listening at 8000');
});