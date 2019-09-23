var bodyParser = require('body-parser');
var itemModel =  require('../models/todomodel');

var urlencodedParser = bodyParser.urlencoded({extended:false});

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://theo:puv775@cluster0-1d6yh.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true , useNewUrlParser: true });





module.exports=function(app){

    app.get('/todo', function(req,res){

        itemModel.todo.find({},function(err,data){
        if(err) throw err;
        res.render('todo',{todos:data});

    });
    });

    app.post('/todo', urlencodedParser, function(req,res){
        var newtodo = itemModel.todo(req.body).save(function(err,data){
            if(err)throw err;
            res.json({todos: data}); 
        })
        
    });

    app.delete('/todo/:item',function(req,res){
        itemModel.todo.find({item:req.params.item.replace(/\-/g," ") }).deleteOne(function(err,data){
            if(err) throw err;
            res.json(data);
        });
        
});
        
   
};