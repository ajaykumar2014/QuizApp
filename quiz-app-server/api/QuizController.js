var question= require('./Questions')
var answerSheet = require('./Answer-Sheet')

exports.getAllQuizQuestion = function(res,res){
    console.log(question.questionAsJSON)
    res.json(question.questionAsJSON)
}

exports.getScore = function(req,res){
    var userScore = {};
    userScore.correctAnswer = 0;
    for(var i=0;i<answerSheet.AnswerSheet.length;i++){
        for(var j=0;j<req.body.length;j++){
            //console.log(answerSheet.AnswerSheet[i].id +"=="+ req.body[j].questionId+"&&"+answerSheet.AnswerSheet[i].answer +"=="+ req.body[j].anwerId)
            if(answerSheet.AnswerSheet[i].id == parseInt(req.body[j].questionId)
                 && answerSheet.AnswerSheet[i].answer == parseInt(req.body[j].anwerId)){
                userScore.correctAnswer +=1;
                break;
            } 
        }
    }
    //console.log("Correct Answer is "+JSON.stringify(userScore))
    /*answerSheet.AnswerSheet.map((answerData)=>{
        req.body.map((data,key)=>{
            console.log(answerData.id +"==="+ data.questionId +"&&"+ answerData.answer +"==="+ data.anwerId)
            if(answerData.id === data.questionId && answerData.answer === data.anwerId){
                console.log(data.questionId +" is correct")
                return;
            }else{
                console.log(data.questionId +" is incorrect")
            }
            //console.log(data.questionId+"<> "+data.anwerId+"  = "+ key)
        }); 
    })
    */
    /*req.body.map((data,key)=>{
        console.log(data.questionId+"<> "+data.anwerId+"  = "+ key)
    });
    */
    console.log(res+"===="+req.body);
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




