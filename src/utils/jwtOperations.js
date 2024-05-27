const jwt = require("jsonwebtoken")

function verifyToken(data){
    try{
        const decoded = jwt.verify(data, process.env.KEY)
        return {data: decoded}
    }
    catch(error){
        return {error: error.message}
    }
}

function makeToken(payload){
    return jwt.sign({payload}, process.env.KEY, {expiresIn: "10"});
}

module.exports = {
    verifyToken, makeToken
}