const todo = require('../Models/todos');



//@desc Get all Todos 
//@route GET /api/v1/todos
//@access Public
exports.getAllTodos = async(req,res)=>{
    // try {
    //     const todos  = await todos.find({});
    //     if(todos){
    //         return res.status(200).json({
    //             data : todos,
    //             length : todos.length,
    //             message : 'Todo List '
    //         })
    //     }
    // } catch (error) {

    return res.status(200).json({
        message :'Todos fetched'
    })        
    }
