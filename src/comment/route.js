const express = require("express")
router = express.Router()

const {createComment, deleteComment, updateComment} = require("./controller")
const {validateToken} = require("../utils/tokenValidation")
const {createCommentValidation, updateCommentValidation, deleteCommentValidation} = require("../utils/validation/commentValidation")

router.post("/post",validateToken, createCommentValidation, createComment)

router.patch("/update", validateToken, updateCommentValidation, updateComment)

router.delete("/delete",validateToken, deleteCommentValidation, deleteComment)

module.exports = router