// 서버 사이드 코드는 오직 app.js에만 작성한다
// app.js 건드리면 무조건 서버 껏다 켜야한다 그래야 적용이 된다 node app.js

// // 파일을 찾을 때에 최상단에 public/을 추가해준다
// app.use(express.static('public'));
// // 파일을 찾을 때에 /static => public 으로 치환해서 준다
// app.use('/static', express.static('public'))

const express = require("express"); // express 불러온다
const app = express(); // express 모듈을 app이라는 변수에 담는다

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set("view engine", "ejs")
app.use("/static", express.static("static"))


// localhost:8000/
const port = 8000;

// app.get("/", (req, res) => {
//     // res.send("heooool");
//     res.sendFile(__dirname + '/test.html'); // 절대경로로 입력해야함 - __dirname : 현재 파일 위치
// });





// 도메인 이름 뒤에 "/" 주소가 가질 페이지를 test.ejs 로 맵핑한다
// localhost:8000/
// app.get("/", (req, res) => {
//     var person = [
//         { name: "댜재라", gender: "재룯" }, 
//         { name: "미재답", gender: "히티" }
//     ]
//     res.render("test", { per: person });
// })


// 도메인 이름 뒤에 "/test" 주소가 가질 페이지를 test1.ejs 로 맵핑한다
// localhost:8000/test
app.get("/test", (req, res) => {
    res.render("test1");
})

// 도메인 이름 뒤에 "/test1" 주소가 가질 페이지를 test2.ejs 로 맵핑한다
// localhost:8000/test1
app.get("/test1", (req, res) => {
    res.render("test2");
})

app.get("/", (req, res) => {
    res.render("main");
})

app.get("/get", (req,res)=>{
    console.log(req.query);
    res.render("aaa",{
        name: req.query.name,
        gender: req.query.gender,
        year: req.query.year,
        month: req.query.month,
        date: req.query.date,
        hobby: req.query.hobby
    });
});

app.post("/post", (req, res) => {
    console.log(req.body);
    res.render("aaa", {
        name: req.body.name,
        gender: req.body.gender,
        year: req.body.year,
        month: req.body.month,
        date: req.body.date,
        hobby: req.body.hobby
    })
})

app.get("/get/ajax", (req, res) => {
    console.log(req.query);
    var data = {
        name: req.query.name,
        name2: req.query.name2
    }
    res.send(data);
})

app.post("/post/ajax", (req, res) => {
    console.log(req.body);
    var data = {
        name: req.body.name,
        name2: req.body.name2
    }
    res.send(data);
})

app.get("/get/axios", (req, res) => {
    console.log(req.query);
    var data = {
        name: req.query.name,
        gender: req.query.gender,
        year: req.query.year,
        month: req.query.month,
        date: req.query.date,
        hobby: req.query.hobby
    }
    res.send(data);
})


app.post("/post/axios", (req, res) => {
    var id = 'dd';
    var pw = 'aa';
    var r_message = 0;
    console.log(req.body);

    var data = {
        u_id: req.body.u_id,
        u_pw: req.body.u_pw
    }
    // console.log(data.u_id)
    if (id == data.u_id && pw == data.u_pw){
        r_message = {answer:0};
    }else{
        r_message = {answer:1};
    }

    res.send(r_message)
})


app.listen(port, () => {
    console.log("server open: ", port);
});