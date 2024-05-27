const express = require("express")
const path = require("path")
const cors = require('cors')

const {compress} = require("./utils/compression")
const userRouter = require("./users/route")
const questionRouter = require("./questions/route")
const answerRouter = require("./answer/route")
const {errorHandler} = require("./utils/errorHandler")
const commentRouter = require("./comment/route")
const openRouter = require("./open/route")
const { log } = require("console")

app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(compress)

app.use(cors())

app.get("/",(request, response) =>{
  response.sendFile(path.resolve(__dirname,"./views/index.html"))
})

app.use("/user", userRouter)

app.use("/question", questionRouter)

app.use("/answer", answerRouter)

app.use("/comment", commentRouter)

app.use("/open", openRouter)

app.use(errorHandler)

app.listen(5678)