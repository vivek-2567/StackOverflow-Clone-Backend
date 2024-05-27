const joi = require("joi")

const updateCommentSchema = joi.object({
  comm_id:joi.string().min(36).max(36).required(),
  comment: joi.string(). min(1).max(512).required()
})

const createCommentSchema = joi.object({
  ans_id:joi.string().min(36).max(36).required(),
  comment: joi.string(). min(1).max(512).required()
})

const deleteCommentSchema = joi.object({
  comm_id:joi.string().min(36).max(36).required()
})

async function updateCommentValidation(request, response, next){
  try{
    const value = await updateCommentSchema.validateAsync(request.body.commentDetails, {abortEarly: false})
    next()
  }
  catch(error){
    next(error)
  }
}

async function createCommentValidation(request, response, next){
  try{
    const value = await createCommentSchema.validateAsync(request.body.commentDetails, {abortEarly: false})
    next()
  }
  catch(error){
    next(error)
  }
}

async function deleteCommentValidation(request, response, next){
  try{
    const value = await deleteCommentSchema.validateAsync(request.body.deleteData, {abortEarly: false})
    next()
  }
  catch(error){
    next(error)
  }
}

module.exports = {createCommentValidation, updateCommentValidation, deleteCommentValidation}