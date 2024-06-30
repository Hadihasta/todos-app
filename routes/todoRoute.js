const express = require("express")
const router = express.Router()
const TodoController = require("../controllers/todoControllers")


router.get("/", TodoController.findAll)
router.get("/:id", TodoController.findOne)
router.post("/", TodoController.create)
router.put("/:id", TodoController.update)
router.delete("/:id", TodoController.destroy)



module.exports = router