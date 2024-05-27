const {sendResponse} = require("./responseSend")

class CustomError extends Error {
  constructor(message, statusCode) {
   super(message)
   this.statusCode = statusCode
  }
}

function errorHandler(err, req, res, next){
  sendResponse(res, err.statusCode || 500, {error:err.message || "Internal Server Error"})
}

module.exports = {errorHandler, CustomError}