var express=require("express");
var app=express();
//设置handlebars视图引擎
var handlebars=require("express3-handlebars").create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set("view engine","handlebars");

app.set('port',process.env.PORT || 80);
//静态资源
console.log(__dirname);
app.use(express.static(__dirname+'/public'));

//放在所有除静态资源之外的路由之前检测查询字符串进行测试
app.use(function(req,res,next){
    res.locals.showTests=app.get('env')!=='production'&&req.query.test==='1';
    next();
});
app.get('/',function(req,res){
    res.render('home');
});
app.get('/about',function(req,res){
    res.render('about');
});
//定制404页面
app.use(function(req,res,next){
    res.status(404);
    res.render("404");
});
//定制500页面
app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500);
    res.render("500");
});
app.listen(app.get("port"),function(){
    console.log("Express start on http://localhost:"+app.get("port")+": press Ctrl-C to terminate.")
});
