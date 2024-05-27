const joi = require("joi")

const userRegisterSchema = joi.object({
  username:joi.string().required().min(1).max(255),
  name:joi.string().required().min(1).max(255),
  password: joi.string().required().min(1).max(255),
  email: joi.string().email().required().min(1),
  phone: joi.number().required().min(1000000000).max(9999999999)
})

const userLoginSchema = joi.object({
  username:joi.string().required().min(1).max(255),
  password: joi.string().required().min(1).max(255)
})

const userUpdateSchema = joi.object({
  username:joi.string().required().min(1).max(255),
  name:joi.string().min(1).max(255),
  password: joi.string().min(1).max(255),
  email: joi.string().email().min(1),
  phone: joi.number().min(1000000000).max(9999999999)
})

async function userRegistrationValidation(request, response, next){
  try{
    const value = await userRegisterSchema.validateAsync(request.body.registerUser, {abortEarly: false})
    next()
  }
  catch(error){
    next(error)
  }
}

async function userLoginValidation(request, response, next){
  try{
    const value = await userLoginSchema.validateAsync(request.body.loginData, {abortEarly: false})
    next()
  }
  catch(error){
    next(error)
  }
}

async function userUpdateValidation(request, response, next){
  try{
    const value = await userUpdateSchema.validateAsync(request.body.userDetails, {abortEarly: false})
    next()
  }
  catch(error){
    next(error)
  }
}

module.exports = {
  userRegistrationValidation,
  userLoginValidation,
  userUpdateValidation
}