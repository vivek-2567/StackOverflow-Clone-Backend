const { v4: uuidv4 } = require('uuid')

const {CustomError} = require("../utils/errorHandler")
const {sendResponse} = require("../utils/responseSend")
const {sqlQuery} = require("../utils/db")
const {_fetchUsernameForDeleteQuery, _deleteQuestionQuery, _createQuestion, _findUsernameQuery, _updateQuesitonQuery} = require("../sqlQuries/questionQuries")

async function deleteQuestion(request, response, next){
  const {ques_id} = request.body.deleteDetails

try{
  const usernameResult = await sqlQuery(_fetchUsernameForDeleteQuery(), [ques_id])

  if(usernameResult.length === 0){
    throw new CustomError("Question Doesnot Exists", 404)
  }

  if(usernameResult[0].username !== request.username){
    throw new CustomError("Cannot delete other's question", 401)
  }

  await sqlQuery(_deleteQuestionQuery(), [ques_id])

  sendResponse(response, 200, {message:"Question deleted Successfully"})
}
catch(error){
  next(error)
}
}

async function postQuestion(request, response, next){
  const questionData = request.body.questionData
  try{
    await sqlQuery(_createQuestion(), [[uuidv4(), request.username, ...Object.values(questionData)]])
    sendResponse(response, 200, {message: "Question Posted Successfully"})
  }
  catch(error){
    next(error)
  }
}

async function updateQuestion (request, response, next){

  try{
    const updateDetails = request.body.updateQuestion
    // console.log(updateDetails.length)

    const usernameResult = await sqlQuery(_findUsernameQuery(), [updateDetails.ques_id])
    if (usernameResult[0].username === request.username){
      throw new CustomError("Cannot update other's question")
    }
    
    for(let i = 0; i<Object.keys(updateDetails).length; i++){
      let key = Object.keys(updateDetails)[i] 
      if(key !== 'ques_id'){
        await sqlQuery(_updateQuesitonQuery(), [key, updateDetails[key], updateDetails['ques_id']])
      }
    }

    sendResponse(response, 200, {message: "Question Updated"})

  }
  catch(error){
    next(error)
  }

}

module.exports = {deleteQuestion, postQuestion, updateQuestion}