var express=require('express');
var app=express();

var PORT=4003;
app.set('view engine','ejs');
app.use(express.static('public'));
app.get('/',function(req,res){
    res.render('index');
})

app.listen(PORT,function(){
    console.log('server is running');
})