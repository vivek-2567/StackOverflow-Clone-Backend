function sendResponse(response, code, data) {
  let ans = {
    statusCode: code,
    data: data,
  }
  response.status(code).send(ans)
}

module.exports = {sendResponse}