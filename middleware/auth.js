let jwt=require("jsonwebtoken");


exports.auth= async function(req,res,next)
{
   let token=req.cookies.token || req.body.token || req.headers.authorization?.split(" ")[1];

   if (!token) {
   return res.redirect("/log")
   }
   let decode=jwt.verify(token,"yashvi")
   req.user=decode
   next();
}