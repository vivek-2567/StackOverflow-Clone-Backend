const {sqlQuery} = require("../utils/db")
const {sendResponse} = require("../utils/responseSend")
const {_allData, _searchQuestions} = require("../sqlQuries/open")

async function allQuestion(request, response, next){
  try{
    const questionResponse = await sqlQuery(_allData(), [])
    sendResponse(response, 200, questionResponse)
  }
  catch(error){
    next(error)
  }
} 

async function searchQuestions(request, response, next){
  const searchData = request.body.searchData
  try{
    const searchResponse = await sqlQuery(_searchQuestions(searchData.keyword),[])
    sendResponse(response, 200, {result:searchResponse})
  }
  catch(error){
    next(error)
  }
}

module.exports = {allQuestion, searchQuestions}