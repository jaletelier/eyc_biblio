module.exports={
    isLoggedIn:function(req,res,next){
      console.log("Is logged in");
      next();
    }
}