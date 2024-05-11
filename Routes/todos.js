const express = require('express');
const router = express.Router();
const {getAllTodos} =  require('../Controllers/todoController')

router
.route('/')
.get(getAllTodos);





module.exports = router;