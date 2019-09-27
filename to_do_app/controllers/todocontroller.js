var bodyParser = require('body-parser');
var itemModel =  require('../models/todomodel');

var urlencodedParser = bodyParser.urlencoded({extended:false});
// database authentication
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://<user><pass>', { useUnifiedTopology: true , useNewUrlParser: true });





module.exports=function(app){
    // GET request on /todo
    app.get('/todo', function(req,res){ 

        itemModel.todo.find({},function(err,data){
        if(err) throw err;
        res.render('todo',{todos:data});

    });
    });
    //POST request on /todo
    app.post('/todo', urlencodedParser, function(req,res){
        var newtodo = itemModel.todo(req.body).save(function(err,data){ //add new item to
            if(err)throw err;
            res.json({todos: data});   
        })
        
    });
    //DELETE the todo item
    app.delete('/todo/:item',function(req,res){ // delete item specified in url
        itemModel.todo.find({item:req.params.item.replace(/\-/g," ") }).deleteOne(function(err,data){
            if(err) throw err;
            res.json(data);   // return json data to the view 
        });
        
});
        
   
};