var question= require('./Questions')
var answerSheet = require('./Answer-Sheet')

exports.getAllQuizQuestion = function(res,res){
    console.log(question.questionAsJSON)
    res.json(question.questionAsJSON)
}

exports.getScore = function(req,res){
    var userScore = {};
    userScore.correctAnswer = 0;
    var userAnswerArray = eval(req.body)
    console.log("User Anser Sheet"+JSON.stringify(userAnswerArray));
    console.log(userAnswerArray[0].answerId+"*********************"+userAnswerArray)
    for(var i=0;i<answerSheet.AnswerSheet.length;i++){
        for(var j=i;j<userAnswerArray.length;j++){
            if((answerSheet.AnswerSheet[i].id == userAnswerArray[j].questionId))
              {
                  var option = answerSheet.AnswerSheet[i];
                  //console.log(option.answer+"Match Question id "+option.id+"User Answer is "+userAnswerArray[j].answerId);
                  if(option.answer == parseInt(userAnswerArray[j].answerId)){
                      console.log("Match answer Id"+userAnswerArray[j].answerId);
                      userScore.correctAnswer +=1;
                      break;
                  }
              }            
        }
    }
    console.log(" User Score is "+userScore.correctAnswer);
    res.send(userScore)
}

exports.validateQuizAnswer = function(req,res){
    console.log("**************************"+req.body.id)
    var answerObject = '';
    if(req.body.id){
        
        answerSheet.AnswerSheet.map(function(data){
            if(data.id === req.body.id){
                answerObject = data;
                return;
            }
        })
    }

    if(answerObject && answerObject.answer === req.body.answerId){
       res.send('Pass')
    }else{
        res.send("Failed")
    }
}




