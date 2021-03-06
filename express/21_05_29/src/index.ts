import cookieParser from 'cookie-parser';
import express from 'express';
import session from 'express-session';
import DataApi from "./apis/data";
import cros from "cors";

const app = express();

app.use(cros( { origin: "http://localhost:3000", credentials: true } ));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //해석 라이브러리 내장 : flase 외장 : true
app.use(cookieParser());
app.use(session({
    secret: 'asdasdasd',
    resave: false,
    saveUninitialized: true,
}));
app.use(DataApi);


//서버 시작 숫자는 포트번호(보통 8080) 코드 구현하고 쓰기
app.listen(8080, () => { //성공하면 콜백
    console.log("Start server");
});