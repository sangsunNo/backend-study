const express = require("express") // express 불러온다
const app = express(); // express 모듈을 app이라는 변수에 담는다

app.set("view engine", "ejs");

app.use("/static", express.static("static"));

const port = 8000;
// ip:8000/

// app.get("/", (req, res) => {
//     // res.send("heooool");
//     res.sendFile(__dirname + '/test.html'); // 절대경로로 입력해야함 - __dirname : 현재 파일 위치
// });

app.get("/", (req, res) => {
    res.render("test");
})

app.listen(port, () => {
    console.log("server open: ", port);
});

// // 파일을 찾을 때에 최상단에 public/을 추가해준다
// app.use(express.static('public'));
// // 파일을 찾을 때에 /static => public 으로 치환해서 준다
// app.use('/static', express.static('public'))