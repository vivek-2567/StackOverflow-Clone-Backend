const joi = require("joi")

const questionPostSchema = joi.object({
  title:joi.string().min(1).max(127).required(),
  question: joi.string(). min(1).max(512).required()
})

const questionUpdateSchema = joi.object({
  ques_id:joi.string().min(36).max(36).required(),
  title:joi.string().min(1).max(127),
  question: joi.string(). min(1).max(512)
})

const questionDeleteSchema = joi.object({
  ques_id:joi.string().min(36).max(36).required(),
})

async function questionPostValidation(request, response, next){
  try{
    const value = await questionPostSchema.validateAsync(request.body.questionData, {abortEarly: false})
    next()
  }
  catch(error){
    next(error)
  }
}

async function questionUpdateValidation(request, response, next){
  try{
    const value = await questionUpdateSchema.validateAsync(request.body.updateQuestion, {abortEarly: false})
    next()
  }
  catch(error){
    next(error)
  }
}

async function questionDeleteValidation(request, response, next){
  try{
    const value = await questionDeleteSchema.validateAsync(request.body.deleteDetails, {abortEarly: false})
    next()
  }
  catch(error){
    next(error)
  }
}

module.exports = {questionPostValidation, questionUpdateValidation, questionDeleteValidation}