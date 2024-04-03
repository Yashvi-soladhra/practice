// let con = require("../../config/pagination_with_asc_dec/connection");

let con=require("../../config/connection")
const { Router } = require("express");
exports.pagination=async function(req,res)
{
    var sql="select count(*) as record from student"

    let [result]=await con.query(sql)

    let totalrecord=result[0].record;

    let rpp=10;
    let lastpage=Math.floor(totalrecord/rpp);


    let page=Number(req.query.page)||1;
    let orderby=req.query.orderby||"sid";
    let offset=page-1>=0? page-1:0;

    let starting=offset*10;

    let[result1]=await con.query(`select * from student order by ${orderby} limit ?,?`,[starting,rpp])
    return res.render("pagination_asc_dec/pagination",{result:result1,page:page,lastpage:lastpage,orderby:orderby})


};