const bcrypt = require("bcrypt")

async function comparePassword(password1,password2){
    return bcrypt.compare(password1,password2)
}

module.exports = {
    comparePassword
}