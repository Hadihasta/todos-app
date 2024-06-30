const TodoService = require('../services/todoService')

class TodoController {
  static findAll = async (req, res, next) => {
    try {
      const todos = await TodoService.findAll(req.query)

      res.status(200).json(todos)
    } catch (err) {
      next(err)
    }
  }

  static findOne = async (req, res, next) => {
    try {

        const  todos = await TodoService.findOne(req.params.id)

        res.status(200).json({data: todos})
    } catch (err) {
      next(err)
    }
  }

  static create = async (req, res, next) => {
    try {
      const todos = await TodoService.create(req.body)

      res.status(201).json({
        message: 'Added To list',
        data: todos,
      })
    } catch (err) {
      next(err)
    }
  }

  static update = async (req, res, next) => {
    try {
      const params = {
        id: req.params.id,
        body: req.body,
      }
let todo =  await TodoService.update(params)
      
      res.status(200).json({ message: 'List has been Updated'  , data: todo })
    } catch (err) {
      next(err)
    }
  }

  static destroy = async (req, res, next) => {
    try {

        await TodoService.destroy(req.params.id)

      
        res.status(200).json({message: "deleted Succesfully"})

    } catch (err) {
      next(err)
    }
  }
}

module.exports = TodoController
