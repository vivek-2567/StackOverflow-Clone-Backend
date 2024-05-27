const { v4: uuidv4 } = require('uuid')

const {sqlQuery} = require("../utils/db")
const {CustomError} = require("../utils/errorHandler")
const {sendResponse} = require("../utils/responseSend")
const {_deleteCommentQuery, _fetchQuestionOwnerQuery, _fetchQuesIdQuery, _createCommentQuery, _fetchUsernameCommentQuery, _updateCommentQuery} = require("../sqlQuries/commentQuries")



async function deleteComment(request, response, next){
  const {comm_id} = request.body.deleteData

  try{
    const usernameResponse = await sqlQuery(_fetchUsernameCommentQuery(), [comm_id])

    if(usernameResponse.length ===0){
      throw new CustomError("Comment Username not found", 404)
    }

    const questionOwnerResponse = await sqlQuery(_fetchQuestionOwnerQuery(), [comm_id])

    if(questionOwnerResponse.length === 0){
      throw new CustomError("Question owner not Found", 404)
    }

    if(usernameResponse[0].username !== request.username && questionOwnerResponse[0].username !== request.username){
      throw new CustomError("Only comment Owner and Question owner can Delete a comment",401)
    }

    await sqlQuery(_deleteCommentQuery(), [comm_id])

    sendResponse(response, 200, {message: "Comment Deleted Successfully"})

  }
  catch(error){
    next(error)
  }
}

async function createComment(request, response, next){
  const commentDetails = request.body.commentDetails
  
  try{
    const quesIdResponse = await sqlQuery(_fetchQuesIdQuery(), [commentDetails.ans_id])

    if(quesIdResponse.length === 0){
      throw new CustomError("Answer Doesnot Exists")
    }

    await sqlQuery(_createCommentQuery(), [[uuidv4(),quesIdResponse[0].ques_id, request.username, ...Object.values(commentDetails)]])

    sendResponse(response, 200, {message:"Comment Posted Successfully"})
  }
  catch(error){
    next(error)
  }
}

async function updateComment(request, response, next){
  const commentDetails = request.body.commentDetails

  try{
    const usernameResponse = await sqlQuery(_fetchUsernameCommentQuery(), [commentDetails.comm_id])
  
    if(usernameResponse.length === 0){
      throw CustomError("Username from comment cannot be fetched", 500)
    }

    if(request.username !== usernameResponse[0].username){
      throw CustomError("Cannot update other's comment", 401)
    }

    await sqlQuery(_updateCommentQuery(), [commentDetails.comment, commentDetails.comm_id])

    sendResponse(response, 200, {message: "Comment Updated Successfully"})

  }
  catch(error){
    next(error)
  }

}

module.exports = {deleteComment, createComment, updateComment}