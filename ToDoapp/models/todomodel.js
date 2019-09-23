var mongoose = require('mongoose');
var todoSchema = new mongoose.Schema(
    {
        item : String
    }
);
 
 var todo = mongoose.model('todo', todoSchema);

 module.exports={
     todo:todo,
     todoSchema:todoSchema
 };