const joi = require("joi")

const answerCreateSchema = joi.object({
  ques_id:joi.string().min(36).max(36).required(),
  answer: joi.string(). min(1).max(512).required()
})

const answerUpdateSchema = joi.object({
  ans_id:joi.string().min(36).max(36).required(),
  answer: joi.string(). min(1).max(512).required()
})

const deleteAnswerSchema = joi.object({
  ans_id:joi.string().min(36).max(36).required()
})

async function answerPostValidation(request, response, next){
  try{
    const value = await answerCreateSchema.validateAsync(request.body.questionData, {abortEarly: false})
    next()
  }
  catch(error){
    next(error)
  }
}

async function answerUpdateValidation(request, response, next){
  try{
    const value = await answerUpdateSchema.validateAsync(request.body.updateQuestion, {abortEarly: false})
    next()
  }
  catch(error){
    next(error)
  }
}

async function answerDeleteValidation(request, response, next){
  try{
    const value = await deleteAnswerSchema.validateAsync(request.body.deleteData, {abortEarly: false})
    next()
  }
  catch(error){
    next(error)
  }
}

module.exports = {answerPostValidation, answerUpdateValidation, answerDeleteValidation}