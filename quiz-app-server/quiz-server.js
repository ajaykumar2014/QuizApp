var http =require('http')
var express =require('express')
var body_parser = require('body-parser')
var quizController = require('./api/QuizController')
var app = express()

app.use(function(req, res, next) {
    
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  next();
  });
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))

app.get("/quiz/questions",quizController.getAllQuizQuestion);
app.put('/quiz/question',quizController.validateQuizAnswer);
app.put('/quiz/score',quizController.getScore);


app.listen(7777,()=>{
    console.log("Quiz Server is started...")
})



