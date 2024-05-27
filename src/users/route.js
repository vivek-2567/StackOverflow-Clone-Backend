const express = require("express")
router = express.Router()

const {registerUser, loginUser, allUserQuestions, updateUserDetails, deleteUser} = require("./controller")
const {userRegistrationValidation, userLoginValidation, userUpdateValidation} = require("../utils/validation/userValidation")
const {validateToken} = require("../utils/tokenValidation")

router.post("/register", userRegistrationValidation, registerUser)

router.post("/login", userLoginValidation, loginUser)

router.get("/all", validateToken, allUserQuestions)

router.patch("/update", validateToken, userUpdateValidation, updateUserDetails)

router.delete("/delete", validateToken, deleteUser)

module.exports = router
