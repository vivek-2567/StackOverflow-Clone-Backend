const express = require("express")
router = express.Router()

const {validateToken} = require("../utils/tokenValidation")
const {deleteAnswer, postAnswer, updateAnswer} = require("./controller")
const {answerPostValidation, answerUpdateValidation, answerDeleteValidation} = require("../utils/validation/answerValidation")


router.post("/post", validateToken, answerPostValidation, postAnswer)

router.patch("/update", validateToken, answerUpdateValidation, updateAnswer)

router.delete("/delete", validateToken, answerDeleteValidation, deleteAnswer)

module.exports = router