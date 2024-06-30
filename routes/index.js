const express = require("express")
const router = express.Router()
const todoRouter = require("./todoRoute")

router.use("/api/todos",todoRouter)

module.exports = router