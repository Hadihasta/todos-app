const TodoRepository = require("../repositories/todoRepository")


class TodoService {

    static findAll = async (params) => {
try {
    const todos = await TodoRepository.findAll(params)

    return todos
} catch (err) {
    throw err
}

}


static findOne = async (params) => {
    try {

        let id = params
        const todos = await TodoRepository.findOne(id)
    
        return todos
    } catch (err) {
        throw err
    }
    
    }
    
    


static create = async (params) => {
    try {
            const todos = await TodoRepository.create(params)

            return todos
        
    } catch (err) {
        throw err
    }
}


static update = async (params) => {
    try {
            const {id, body} = params
            const todos = await TodoRepository.update(id,body)


            return todos
        
    } catch (err) {
        throw err
    }
}

static destroy = async (id) => {
    try {

        const filter = {
            where: { 
                id
            }
        }
       
         await TodoRepository.destroy(filter)
        
    } catch (err) {
        throw err
    }
}




}

module.exports = TodoService