
'use strict'


module.exports={
    'POST /signin':async (ctx,next)=>{
        var 
           email =ctx.request.body.email || '',
           password =ctx.request.body.password || '' ;
        if(email==="szhua"&&password === "123456"){
            ctx.render('signin-ok.html',{
                title:'SIGNIN_OK',
                name:'Szhua'
            })
        }else{
             ctx.render('signin-failed.html',{
                 title:"SIGN_IN_Failed"
             })
        }   
    
   }
}





