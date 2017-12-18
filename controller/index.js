//定位首页：

/**
 * 
 * @param {*} ctx 管理文件 
 * @param {*} next function
 */
var fn_index =async function(ctx,next){
    ctx.render('index.html',{
        title:"Welcome!!"
    });
}
var fn_signin =async(ctx,next)=>{
    var email = ctx.request.email || '' ;
    var password =ctx.request.password || '' ;
         //登录成功
    if(email==='szhua'&&password==="123456"){
        ctx.render('signin-ok.html',{
            title:"signIn-oK",
            name:"szhua"
        })
        //登录失败
    }else{
        ctx.render('signin-failed.html',{
             title:"SIGNIN_FAILED" 
        });
    }
}

module.exports ={
    'GET /':fn_index,
    'POST /signin_index':fn_signin
}






