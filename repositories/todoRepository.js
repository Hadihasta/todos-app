const {Todo} = require("../models")


class TodoRepository {


    
static findAll = async (params) =>  {
    try {
        const todos = await Todo.findAll(params)
        
        return todos

    } catch (err) {
        throw err
    }
}



static findOne = async (id) =>  {
    try {

    

   const todo =  await Todo.findOne({
        where: {
            id
        }
    })

    if(!todo)
            throw {name: "ErrorNotFound", message: "List Not Found"}
           
return todo

    } catch (err) {
        throw err
    }
}

    
static create = async (params) =>  {
    try {
        const {title, description } = params.inputed
        const todos = await Todo.create({title: title , description: description}, {
            returning: true
        })
    
        return todos

    } catch (err) {
        throw err
    }
}


static update = async (id,body) =>  {
    try {
        const todo = await Todo.findOne({
            where:{
                id
            }
           })
    
           if(!todo) 
            throw {name: "ErrorNotFound", message: "List Not Found"}
           
        const todos =    await todo.update(body)

        
            return todos
        

    } catch (err) {
        throw err
    }
}





static destroy = async (params) =>  {
    try {

        const todo = await Todo.findOne(params)
    
           if(!todo) 
            throw {name: "ErrorNotFound", message: "List Not Found"}
           
         await Todo.destroy(params)
            
         

    } catch (err) {
        throw err
    }
}


}

module.exports = TodoRepository