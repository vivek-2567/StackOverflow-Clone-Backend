const bcrypt = require("bcrypt")

function hashPass(pass){
    return bcrypt.hash(pass, 10)
}

module.exports = {
    hashPass
}