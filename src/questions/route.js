const express = require("express")
router = express.Router()

const {postQuestion, deleteQuestion, updateQuestion} = require("./controller")
const {validateToken} = require("../utils/tokenValidation")
const {questionPostValidation, questionUpdateValidation, questionDeleteValidation} = require("../utils/validation/questionValidation")

router.post("/post", validateToken, questionPostValidation, postQuestion)

router.patch("/update", validateToken, questionUpdateValidation, updateQuestion)

router.delete("/delete",validateToken, questionDeleteValidation, deleteQuestion)

module.exports = router