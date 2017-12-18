'use strict';


const Koa =require('koa') ;
const bodyParser =require('koa-bodyparser') ;
const controller =require('./controllers') ;
const staticFiles =require('./static-files');
const templating =require('./templating');

//生产环境的判断；
const isProduction = process.env.NODE_ENV === 'production';


//app 
const app =new Koa() ;


//处理请求第一步
app.use(async (ctx,next)=>{
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});



//添加bodyParser() 为post
app.use(bodyParser()) ;

//添加静态的文件
//static file support:
if (! isProduction) {
    app.use(staticFiles('/static/', __dirname + '/static'));
}


//numJucks  使用模板
app.use(templating('views',{
    noCache: !isProduction,
    watch: !isProduction
}));

//add router;
app.use(controller());


app.listen(8080);







