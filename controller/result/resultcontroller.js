let con = require("../../config/result/connection");

exports.resultfunction=async(req,res)=>
{
   

        var sql = `SELECT  s.studentid,s.student_name,
        sum( case when e.examtype=1 then e.obtain_m_theary else 0 end) as final_t, 
        sum( case when e.examtype=1 then e.obtain_m_prectical else 0 end) as final_p, 
        sum( case when e.examtype=2 then e.obtain_m_theary else 0 end) as terminal_t, 
        sum( case when e.examtype=2 then e.obtain_m_prectical else 0 end) as terminal_p, 
        sum( case when e.examtype=3 then e.obtain_m_theary else 0 end) as prilim_t,
        sum( case when e.examtype=3 then e.obtain_m_prectical else 0 end) as prilim_p
        FROM Studentmasterr as s
        left JOIN Exammaster as e
        on s.studentid=e.studentid
        group by s.studentid;`
    
        let [result] = await con.query(sql)
        let totalrecord = result.length;
      
        let rpp = 10;
        let lastpage = Math.floor(totalrecord / rpp) + 1;
    
    
        let page = Number(req.query.page) || 1;
    
        let offset = page - 1 >= 0 ? page - 1 : 0;
    
        let starting = offset * rpp;
    
    
    
        join = `SELECT  s.studentid,s.student_name,
        sum( case when e.examtype=1 then e.obtain_m_theary else 0 end) as final_t, 
        sum( case when e.examtype=1 then e.obtain_m_prectical else 0 end) as final_p, 
        sum( case when e.examtype=2 then e.obtain_m_theary else 0 end) as terminal_t, 
        sum( case when e.examtype=2 then e.obtain_m_prectical else 0 end) as terminal_p, 
        sum( case when e.examtype=3 then e.obtain_m_theary else 0 end) as prilim_t,
        sum( case when e.examtype=3 then e.obtain_m_prectical else 0 end) as prilim_p
        FROM Studentmasterr as s
        left JOIN Exammaster as e
        on s.studentid=e.studentid
        group by s.studentid limit ?,? ;`
    
    
    
        let [result1] = await con.query(join, [starting, rpp])
    
        return res.render("result/result1", { result: result1, page: page, lastpage: lastpage })
    
}

exports.resultitemfunction=async(req,res)=>
{
    
        id = Number(req.params.id);
    
    
    
        join = `SELECT  s.studentid,s.student_name,sb.Subjectname,
        sum( case when e.examtype=1 then e.obtain_m_theary else 0 end) as final_t, 
        sum( case when e.examtype=1 then e.obtain_m_prectical else 0 end) as final_p, 
        sum( case when e.examtype=2 then e.obtain_m_theary else 0 end) as terminal_t, 
        sum( case when e.examtype=2 then e.obtain_m_prectical else 0 end) as terminal_p, 
        sum( case when e.examtype=3 then e.obtain_m_theary else 0 end) as prilim_t,
        sum( case when e.examtype=3 then e.obtain_m_prectical else 0 end) as prilim_p
        FROM ((Studentmasterr as s
        inner JOIN Exammaster as e
        on s.studentid=e.studentid) left join subjectmaster as sb on e.subjectid=sb.subjectid)
        where e.studentid=?
        group by e.subjectid;`
    
       
    
    var q1 = `
    select count(studentid) as att 
    from attendensmaster2024
    where attendensh="1" and studentid= ${id}
    `
    
    
        let [result1] = await con.query(join, [id])
        let result2 = await con.query(q1)
        res.render("result/item",{result:result1,result2:result2})
    
    
    
}