let con=require("../../config/connection")
const { Router } = require("express");


exports.search=async function(req,res){
    const sql=req.body.textquery || req.cookies.y
   
    let [result]=await con.query(sql)
    let totalrecord=result.length;
    
    let rpp=10;
    let lastpage=Math.floor(totalrecord/rpp)+1;
    let page=Number(req.query.page)||1;
    let offset=page-1>=0? page-1:0;

    let starting=offset*rpp;
    let query=sql.split(";")[0]+` limit ?,?`

    let[result1]=await con.query(query,[starting,rpp])
    const key=Object.keys(result[0]);
    return res.cookie("y",sql).render("dynamic/page",{result:result1,key:key,page:page,lastpage:lastpage })
    
}

exports.dynamicfunction=async function(req,res){
    let result=[]
    res.render("dynamic/search",{result});
   
 };
