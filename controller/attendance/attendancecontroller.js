
let con=require("../../config/connection")

exports.functions  = async (req, res) => {
    
        select = req.query.select || "2023-12-31";
        arr = select.split("-");
       
        let sql =  `select s.studentid,s.student_name,count(a.attendensh)as attendensh
         FROM attendensmaster2024 as a left JOIN Studentmasterr as s ON s.studentid=a.studentid where a.attendensh=1 and a.sdate between "${arr[0]}-${arr[1]}-01" and "${arr[0]}-${arr[1]}-${arr[2]}" group by  s.studentid,a.attendensh`;
        
        let [result] = await con.query(sql)
        let totalrecord = result.length;
        let rpp = 10;
        let lastpage = Math.floor(totalrecord/rpp)+1;
        let page = Number(req.query.page) || 1;
        let offset = page - 1 >= 0 ? page - 1 : 0;
        let starting = offset * 10;

        join = `select s.studentid,s.student_name,count(a.attendensh)as attendensh,round((count(a.attendensh)*100/${arr[2]}),2) as percentage FROM attendensmaster2024 as a left JOIN Studentmasterr as s ON s.studentid=a.studentid where a.attendensh=1 and a.sdate between "${arr[0]}-${arr[1]}-01" and "${arr[0]}-${arr[1]}-${arr[2]}" group by  s.studentid,a.attendensh limit ?,?`;
        let [result1] = await con.query(join, [starting, rpp]) 
        
        return res.render("attendance/attendence", { result: result1, page: page, lastpage: lastpage,select:select,month:Number(`${arr[1]}`) })
    
};