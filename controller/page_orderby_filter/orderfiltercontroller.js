
let con = require("../../config/page_orderby_filter/connection");
const { Router } = require("express");
exports.orderfilter=async function(req,res)

{
    select = req.query.select || "2023-12-31";
    arr = select.split("-");


    var sql="select count(*) as record from student"

    let [result]=await con.query(sql)

    let totalrecord=result[0].record;

    let rpp=10;
    let lastpage=Math.floor(totalrecord/rpp);
    console.log(lastpage);

    let page=Number(req.query.page)||1;

    let orderby1=req.query.sort === "desc"?"desc":"asc"
    let orderby=req.query.orderby || 'sid';
    let offset=page-1>=0? page-1:0;

    let starting=offset*10;

    let[result1]=await con.query(`select * from student order by ${orderby} ${orderby1} limit ?,?`,[starting,rpp])
    return res.render("page_orderby_filter/page",{result:result1,page:page,lastpage:lastpage, orderby:orderby,orderby1:orderby1,select:select,month:Number(`${arr[1]}`) })


};
