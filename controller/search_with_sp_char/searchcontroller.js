let con = require("../../config/connection");


exports.spchar =async function(req,res)
{
   res.render("search_with_sp_char/search", { result: [] })
}

exports.spsearch=async function (req, res) {
    let str = req.body.select;

    let fname = [];
    let lname = [];
    let middalname = [];
    let city = []
    let state = []
    let country = []


    for (let i = 0; i < str.length; i++) {
      
        if (str[i] == "_") {
            let data = "";
            i++;

          while (str[i] != '_' && str[i] != '^' && str[i] != '$' && str[i] != "{" && str[i] != "}" && str[i] != ":" && i<str.length)  
          {
                    data += str[i]
                    i++
          }
               
            
            fname.push(data.trim());
            i--;
         }
        else if (str[i] == "^") {
            let data = "";
            i++;

            while (str[i] != '_' && str[i] != '^' && str[i] != '$' && str[i] != "{" && str[i] != "}" && str[i] != ":"  && i<str.length) {
                data += str[i]
                i++;
            }
           

            lname.push(data.trim());
            i--;
         }


       else if (str[i] == "$") {
            let data = "";
            i++;

            

            while (str[i] != '_' && str[i] != '^' && str[i] != '$' && str[i] != "{" && str[i] != "}" && str[i] != ":"  && i<str.length) {
                data += str[i]
                i++;
            }
           
            middalname.push(data.trim());
            i--;
         }
        else if (str[i] == "{") {
            let data = "";
            i++;

            while (str[i] != '_' && str[i] != '^' && str[i] != '$' && str[i] != "{" && str[i] != "}" && str[i] != ":"  && i<str.length) {
                data += str[i]
                i++;
            }
           

            
            city.push(data.trim());
            i--;
        }
        else if (str[i] == "}") {
            let data = "";
            i++;

            while (str[i] != '_' && str[i] != '^' && str[i] != '$' && str[i] != "{" && str[i] != "}" && str[i] != ":"  && i<str.length) {
                data += str[i]
                i++;
            }
           
            state.push(data.trim());
            i--;


        }
        else if (str[i] == ":") {
            let data = "";
            i++;

            while (str[i] != '_' && str[i] != '^' && str[i] != '$' && str[i] != "{" && str[i] != "}" && str[i] != ":"  && i<str.length) {
                data += str[i]
                i++;
            }
           
            country.push(data.trim());
            i--;
        }
    }
   

console.log(fname);
    sql = `select * from student where `;

    if (fname.length != 0) {
        if (fname.length = 1) {
            sql = sql + `f_name like "%${fname[0]}%" and `
        } else {
            sql = sql + `(`
            for (let i = 0; i < fname.length; i++) {
                if (i + 1 < length) {
                    sql = sql + `f_name like "%${fname[i]}%" or `
                } else {
                    sql = sql + `f_name like "%${fname[i]}%") and `
                }

            }
        }

    }
    if (lname.length != 0) {
        if (lname.length = 1) {
            sql = sql + ` l_name like "%${lname[0]}%" and `
        } else {
            sql = sql + `(`
            for (let i = 0; i < lname.length; i++) {
                if (i + 1 < length) {
                    sql = sql + `l_name like "%${lname[i]}%" or `
                } else {
                    sql = sql + `l_name like "%${lname[i]}%") and `
                }

            }
        }

    }
    if (middalname.length != 0) {
        if (middalname.length = 1) {
            sql = sql + `m_name like "%${middalname[0]}%" and `
        } else {
            sql = sql + `(`
            for (let i = 0; i < middalname.length; i++) {
                if (i + 1 < length) {
                    sql = sql + `m_name like "%${middalname[i]}%" or `
                } else {
                    sql = sql + `m_name like "%${middalname[i]}%") and `
                }

            }
        }

    }
    if (city.length != 0) {
        if (city.length = 1) {
            sql = sql + `city like "%${city[0]}%" and `
        } else {
            sql = sql + `(`
            for (let i = 0; i < city.length; i++) {
                if (i + 1 < length) {
                    sql = sql + `city like "%${city[i]}%" or `
                } else {
                    sql = sql + `city like "%${city[i]}%") and `
                }

            }
        }

    }
    if (state.length != 0) {
        if (state.length = 1) {
            sql = sql + `State like "%${state[0]}%" and `
        } else {
            sql = sql + `(`
            for (let i = 0; i < state.length; i++) {
                if (i + 1 < length) {
                    sql = sql + `State like "%${state[i]}%" or `
                } else {
                    sql = sql + `State like "%${state[i]}%") and `
                }

            }
        }

    }

    if (country.length != 0) {
        if (country.length = 1) {
            sql = sql + `Country like "%${country[0]}%" and `
        } else {
            sql = sql + `(`
            for (let i = 0; i < country.length; i++) {
                if (i + 1 < length) {
                    sql = sql + `Country like "%${country[i]}%" or `
                } else {
                    sql = sql + `Country like "%${country[i]}%") and `
                }

            }
        }

    }
    sql = sql + `true`;



    let [result] = await con.query(sql,);
 

    return res.render("search_with_sp_char/search", { result: result })
};

    
