const {sqlQuery} = require("../utils/db")
const {CustomError} = require("../utils/errorHandler")
const {sendResponse} = require("../utils/responseSend")
const {_fetchAnswerUserQuery, _fetchQuestionOwnerQuery, _deleteAnswerQuery, _questionPosterQuery, _createAnswerQuery, _updateAnswerQuery} = require("../sqlQuries/answerQuries")

const { v4: uuidv4 } = require('uuid')


async function deleteAnswer(request, response, next){
  const {ans_id} = request.body.deleteData
  try{
    const usernameResponse = await sqlQuery(_fetchAnswerUserQuery(), [ans_id])

    if(usernameResponse.length === 0){
      throw new CustomError("Cannot find username for answer", 404)
    }

    const questionOwnerResponse = await sqlQuery(_fetchQuestionOwnerQuery(), [ans_id])

    if(usernameResponse[0].username !== request.username && questionOwnerResponse[0].username !== request.username){
      throw new CustomError("Only answer Owner and Question owner can Delete a answer",401)
    }

    await sqlQuery(_deleteAnswerQuery(), [ans_id])

    sendResponse(response, 200, {message:"Answer Deleted Successfully"})
    

  }
  catch(error){
    next(error)
  }
}

async function postAnswer(request, response, next){

  try{
    const answerDetails = request.body.answerDetails

    const usernameResponse = await sqlQuery(_questionPosterQuery(), [answerDetails.ques_id])

    if(usernameResponse.length === 0){
      throw new CustomError("User of the question not found", 404)
    }

    if(usernameResponse[0].username === request.username){
      throw new CustomError("Question Poster cannot answer", 401)
    }

    await sqlQuery(_createAnswerQuery(),[[uuidv4(), request.username, ...Object.values(answerDetails)]])

    sendResponse(response, 200, {message: "Answer Posted Successfully"})

  }
  catch(error){
    next(error)
  }
}

async function updateAnswer(request, response, next){
  const updateAnswerDetails = request.body.answerDetails

  try{
    const fetchUsernameResponse = await sqlQuery(_fetchAnswerUserQuery(), [updateAnswerDetails.ans_id])

    if(fetchUsernameResponse.length === 0){
      throw new CustomError("Answer Doesn't Exists",400) 
    }

    if(fetchUsernameResponse[0].username !== request.username){
      throw new CustomError("Cannot update other's Answer",400) 
    }

    await sqlQuery(_updateAnswerQuery(),[updateAnswerDetails.answer, updateAnswerDetails.ans_id])

    sendResponse(response, 200, {message: "Updated answer successfully"})

  }
  catch(error){
    next(error)
  }
}

module.exports = {deleteAnswer, postAnswer, updateAnswer}