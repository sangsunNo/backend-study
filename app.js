const express = require("express") // express 불러온다
const app = express() // express 모듈을 app이라는 변수에 담는다

const port = 8000;
// ip:8000/
app.get("/", (req, res)=>{
    // res.send("heooool");
    res.sendFile(__dirname + '/test.html'); // 절대경로로 입력해야함 - __dirname : 현재 파일 위치
});

app.listen(port, () => {
    console.log("server open: ", port);
});