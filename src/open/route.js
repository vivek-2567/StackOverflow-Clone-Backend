const express = require("express")
router = express.Router()

const {allQuestion, searchQuestions} = require("./controller")

router.get("/all", allQuestion)

router.post("/search", searchQuestions)

module.exports = router