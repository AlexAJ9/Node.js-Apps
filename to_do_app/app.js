var express= require('express');
var controller= require('./controllers/todocontroller');
var itemModel =  require('./models/todomodel');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));


app.listen(3000);
console.log('listening');
// run app
controller(app);
 
