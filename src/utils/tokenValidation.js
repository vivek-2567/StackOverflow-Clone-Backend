require("dotenv").config()
const jwt = require("jsonwebtoken")
const { verifyToken } = require("./jwtOperations")
const { sendResponse } = require("./responseSend")

function validateToken(request, response, next) {

  try{
    if (!request.headers.authorization) {
      const err =  new Error("No Bearer Token Found")
      err.statusCode = 400
      throw err
    }

    const verifiedData = verifyToken(request.headers.authorization.slice(7))
    if(verifiedData.error){
      return sendResponse(response, 423, {message:"Token Expired"})
    }
    const decodedToken = verifiedData.data
    request.username = decodedToken
    next()

  }
  catch(error){
    throw(error)
  }

}

module.exports = {validateToken}
