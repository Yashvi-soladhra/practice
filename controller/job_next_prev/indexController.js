const moment = require("moment");
let conn = require("../../config/connection");
const { Router } = require("express");




const basicdetails = async (req, res) => {
   
        let { fname, currdesignation, email, gender, address, state, lname, dob, phone, relnstatus, city, zipcode } = req.body;

        let sql = `insert into basicdetails (fname, designation, email, gender, address, state, lname, dob, phone, reln_status, city, zipcode) values (?)`

        dob = new Date(dob)
        data = [fname, currdesignation, email, gender, address, state, lname, dob, phone, relnstatus, city, zipcode]

        let [result] = await conn.query(sql, [data]);
        let bid = result.insertId;

        return bid;
    

}

const educationdeatils = async (req, res, bid) => {
    
        let { sscnameofboard, sscpassingyear, sscpercentage, hscnameofboard, hscpassingyear, hscpercentage, bachelorcourse, bachelorpassingyear, bachelorpercentage, mastercourse, masterpassingyear, masterpercentage } = req.body;


        let sql = `insert into educationdetails (candid,degreename,coursename_nameofboard,passingyear,percentage) values (?)`;
        let ssc = [bid, "ssc", sscnameofboard, sscpassingyear, sscpercentage]
        let hsc = [bid, "hsc", hscnameofboard, hscpassingyear, hscpercentage]
        let bachelor = [bid, "bachelor", bachelorcourse, bachelorpassingyear, bachelorpercentage]
        let master = [bid, "master", mastercourse, masterpassingyear, masterpercentage]
        let array = [ssc, hsc, bachelor, master]

        let result;
        for (let i = 0; i < array.length; i++) {
            if (array[i].includes("ssc") || array[i].includes("hsc") || !array[i].includes("")) {
                [result] = await conn.query(sql, [array[i]])
            }

        }
        return result;
    
}
const workexperience = async (req, res, bid) => {

        let { companyname, designation, from, to } = req.body;

        let sql = `insert into workexperiences (candid,companyname,designation,fromdate,todate) values (?)`;
        let array = [];
        let result;

        for (let i = 0; i < companyname.length; i++) {
            if (companyname[i].trim() != "") {
                array[0] = bid;
                array[1] = companyname[i]
                array[2] = designation[i]
                array[3] = new Date(from[i])
                array[4] = new Date(to[i]);
                console.log(array);
                [result] = await conn.query(sql, [array]);
            }
        }
        return result;
   
}
const languageknown = async (req, res, bid) => {
  
        let { lang1, langcheck1, lang2, langcheck2, lang3, langcheck3 } = req.body;

        let result;

        let sql = `insert into languageknowns (candid,language,canread,canwrite,canspeak) values (?)`;
        if (lang1 !== undefined) {
            let l1 = [bid, lang1, langcheck1.includes("read") ? true : false,
                langcheck1.includes("write") ? true : false, langcheck1.includes("speak") ? true : false];
            [result] = await conn.query(sql, [l1])
        }
        if (lang2 !== undefined) {
            let l2 = [bid, lang2, langcheck2.includes("read") ? true : false,
                langcheck2.includes("write") ? true : false, langcheck2.includes("speak") ? true : false];
            [result] = await conn.query(sql, [l2])
        }
        if (lang3 != undefined) {
            let l3 = [bid, lang3, langcheck3.includes("read") ? true : false,
                langcheck3.includes("write") ? true : false, langcheck3.includes("speak") ? true : false];
            [result] = await conn.query(sql, [l3])
        }

        return result;
    
}
const technologyknown = async (req, res, bid) => {
 
        let { php, phptech, mysql, mysqltech, oracle, oracletech, laravel, laraveltech } = req.body;

        let sql = `insert into technologyknowns (candid,techname,level) values (?)`;
        let phpdata = [], mysqldata = [], oracledata = [], laraveldata = [];
        let result = [];
        if (php && phptech) {
            phpdata = [bid, php, phptech];

            [result] = await conn.query(sql, [phpdata])

        }
        if (mysql && mysqltech) {
            mysqldata = [bid, mysql, mysqltech];

            [result] = await conn.query(sql, [mysqldata])

        }
        if (laravel && laraveltech) {
            laraveldata = [bid, laravel, laraveltech];

            [result] = await conn.query(sql, [laraveldata])

        }

        if (oracle && oracletech) {
            oracledata = [bid, oracle, oracletech];
            [result] = await conn.query(sql, [oracledata])
        }

        return result;
    


}

const references = async (req, res, bid) => {

        let { name, contactnum, relation } = req.body;

        let sql = `insert into reference (candid,person_name,contactnum,relation) values (?)`;

        let result = [];
        let array = []

        for (let i = 0; i < name.length; i++) {
            if (name[i].trim() != "") {
                array[0] = bid;
                array[1] = name[i]
                array[2] = contactnum[i]
                array[3] = relation[i]
                console.log(array);

                [result] = await conn.query(sql, [array]);
            }
        }
        return result;
    
}

const preferences = async (req, res, bid) => {
  
        let { prefloc, noticeperiod, department, expectedctc, currentctc } = req.body;
        let sql = `insert into preferences (candid,preferedlocation,noticeperiod,expacted_ctc,current_ctc,department) values (?)`;

        let preference = [bid, prefloc, noticeperiod, expectedctc, currentctc, department];
        let [result] = await conn.query(sql, [preference])
        return result;

   
}


const getdata = async (req, res, table, bid, order) => {
    let sql = `select * from ${table} where candid=${bid} order by ${order}`;
    let [result] = await conn.query(sql);
    return result;

}

const updatebasic = async (req, res, bid) => {
  
    let { candid, fname, currdesignation, email, gender, address, state, lname, dob, phone, relnstatus,
        city, zipcode } = req.body;

        
        let basicdetail = {
            "fname": fname,
            "designation": currdesignation,
            "email": email, 
            "gender": gender,
             "address": address,
             "state": state,
             "lname": lname, 
             "dob": new Date(dob), 
             phone: phone,
             "reln_status": relnstatus,
             "city": city,
             "zipcode": zipcode
    };

    let sql = `update basicdetails set ? where candid=?`
    let [result] = await conn.query(sql, [basicdetail, bid])

    return result;


}



const updateeducation = async (req, res, bid) => {

  


        let { sscnameofboard, sscpassingyear, sscpercentage, hscnameofboard, hscpassingyear,
            hscpercentage, bachelorcourse, bachelorpassingyear, bachelorpercentage, mastercourse,
            masterpassingyear, masterpercentage } = req.body

        let sql = `update educationdetails set ? where candid=? and degreename=?`;

        let ssc = {
            "candid": bid, "degreename": "ssc", "coursename_nameofboard": sscnameofboard, "passingyear": sscpassingyear, "percentage": sscpercentage
        };
        let hsc = {
            "candid": bid, "degreename": "hsc", "coursename_nameofboard": hscnameofboard, "passingyear": hscpassingyear, "percentage": hscpercentage
        };
        let bachelor = {
            "candid": bid, "degreename": "bachelor", "coursename_nameofboard": bachelorcourse, "passingyear": bachelorpassingyear, "percentage": bachelorpercentage
        };
        let master = {
            "candid": bid, "degreename": "master", "coursename_nameofboard": mastercourse, "passingyear": masterpassingyear, "percentage": masterpercentage
        };

        let array = [ssc, hsc, bachelor, master];
        let result;
        for (let i = 0; i < array.length; i++) {
            if (Object.values(array[i]).includes("ssc") || Object.values(array[i]).includes("hsc") || !Object.values(array[i]).includes("")) {
                [result] = await conn.query(sql, [array[i], bid, array[i].degreename])
            }
        }
        return result;
  
}

const updateworkexperience = async (req, res, bid) => {
 


        let { workid, companyname, designation, from, to } = req.body;
        let sql = `update workexperiences set ? where  wid=?`;

        let array = {};
        let result;
        for (let i = 0; i < companyname.length; i++) {
            if (companyname[i].trim() != "") {
                console.log(workid[i]);
                array["companyname"] = companyname[i];
                array["designation"] = designation[i];
                array["fromdate"] = moment(from[i]).format('YYYY-MM-DD');
                array["todate"] = moment(to[i]).format('YYYY-MM-DD');

                if (array["companyname"] && !workid[i]) {
                    [result] = await conn.query(`insert into workexperiences set candid=${bid},?`, [array]);
                } else {
                    [result] = await conn.query(sql, [array, workid[i]]);
                }
            } if (companyname[i].trim() == "" && workid[i]) {
                [result] = await conn.query(`delete from workexperiences where candid=${bid} and wid=${workid[i]}`);
            }
        }
        return result;
    
}

const updatelanguageknowns = async (req, res, bid) => {
 


        let { lang1, langcheck1, lang2, langcheck2, lang3, langcheck3 } = req.body;
        let result;

        let sql = `update languageknowns set ? where candid=? and language=?`;

        let query = `select * from languageknowns where candid=${bid}`;
        let [l] = await conn.query(query);
        let lang = [];

        l.forEach(element => {
            lang.push(element.language)
        });


        if (lang1 !== undefined) {

            let l1 = {
                "language": lang1, "canread": langcheck1.includes("read") ? true : false, "canwrite": langcheck1.includes("write") ? true : false,
                "canspeak": langcheck1.includes("speak") ? true : false
            };

            if (lang.includes(lang1)) {
                [result] = await conn.query(sql, [l1, bid, "hindi"])
            } else {
                [result] = await conn.query(`insert into languageknowns SET candid=${bid},?`, [l1])
            }
        } else {
            [result] = await conn.query(`delete from languageknowns where candid=${bid} and language=?`, ["hindi"])
        }


        if (lang2 !== undefined) {
            let l2 = {
                "language": lang2, "canread": langcheck2.includes("read") ? true : false, "canwrite": langcheck2.includes("write") ? true : false,
                "canspeak": langcheck2.includes("speak") ? true : false
            };

            if (lang.includes(lang2)) {
                [result] = await conn.query(sql, [l2, bid, lang2])
            } else {
                [result] = await conn.query(`insert into languageknowns SET candid=${bid},?`, [l2])
            }

        } else {
            [result] = await conn.query(`delete from languageknowns where candid=${bid} and language=?`, ["gujrati"])
        }

        if (lang3 != undefined) {
            let l3 = {
                "language": lang3,
                "canread": langcheck3.includes("read") ? true : false,
                "canwrite": langcheck3.includes("write") ? true : false,
                "canspeak": langcheck3.includes("speak") ? true : false
            };

            if (lang.includes(lang3)) {
                [result] = await conn.query(sql, [l3, bid, lang3])
            } else {
                [result] = await conn.query(`insert into languageknowns SET candid=${bid},?`, [l3])
            }
        } else {
            [result] = await conn.query(`delete from languageknowns where candid=${bid} and language=?`, ["english"])
        }

        return result;
   



}

const updatetechnology = async (req, res, bid) => {
 


        let { php, phptech, mysql, mysqltech, oracle, oracletech, laravel, laraveltech } = req.body;

        let result;


        let sql = `update technologyknowns set ? where candid=? and techname=?`;

        let query = `select * from technologyknowns where candid=${bid}`;
        let [technology] = await conn.query(query);

        let tech = [];

        technology.forEach(element => {
            tech.push(element.techname)
        });

        let phpdata = [], mysqldata = [], oracledata = [], laraveldata = [];

        if (php && phptech) {
            phpdata = {
                "techname": php,
                "level": phptech
            };

            if (tech.includes(php)) {
                [result] = await conn.query(sql, [phpdata, bid, php])
            } else {
                [result] = await conn.query(`insert into technologyknowns set candid=${bid},?`, [phpdata])
            }
        } else {
            [result] = await conn.query(`delete from technologyknowns where candid=${bid} and techname=?`, ["php"])
        }


        if (mysql && mysqltech) {
            mysqldata = {
                "techname": mysql,
                "level": mysqltech
            };
            if (tech.includes(mysql)) {
                [result] = await conn.query(sql, [mysqldata, bid, mysql])
            } else {
                [result] = await conn.query(`insert into technologyknowns set candid=${bid},?`, [mysqldata])
            }
        } else {
            [result] = await conn.query(`delete from technologyknowns where candid=${bid} and techname=?`, ["mysql"])
        }

        if (laravel && laraveltech) {
            laraveldata = {
                "techname": laravel,
                "level": laraveltech
            };

            if (tech.includes(laravel)) {
                [result] = await conn.query(sql, [laraveldata, bid, laravel])
            } else {
                [result] = await conn.query(`insert into technologyknowns set candid=${bid},?`, [laraveldata])
            }
        } else {
            [result] = await conn.query(`delete from technologyknowns where candid=${bid} and techname=?`, ["laravel"])
        }

        if (oracle && oracletech) {
            oracledata = {
                "techname": oracle,
                "level": oracletech
            };

            if (tech.includes(oracle)) {
                [result] = await conn.query(sql, [oracledata, bid, oracle])
            } else {
                [result] = await conn.query(`insert into technologyknowns set candid=${bid},?`, [oracledata])
            }
        } else {
            [result] = await conn.query(`delete from technologyknowns where candid=${bid} and techname=?`, ["oracle"])
        }

        return result;
   
}

const updatereference = async (req, res, bid) => {
   


        let { refid, name, contactnum, relation } = req.body;

        let sql = `update reference set ? where candid=? and refid=?`;



        let array = {};
        let result;
        for (let i = 0; i < name.length; i++) {
            if (name[i].trim() != "") {


                console.log(refid[i]);
                array["person_name"] = name[i]
                array["contactnum"] = contactnum[i]
                array["relation"] = relation[i];


                if (array["person_name"] && !refid[i]) {
                    [result] = await conn.query(`insert into reference set candid=${bid},?`, [array]);
                } else {
                    [result] = await conn.query(sql, [array, bid, refid[i]]);
                }



            } if (name[i].trim() == "" && refid[i]) {
                [result] = await conn.query(`delete from reference where candid=${bid} and refid=${refid[i]}`);
            }

        }

        return result;
    


}


const updatepreference = async (req, res, bid) => {

 
        
   
    let { prefloc, noticeperiod, department, expectedctc, currentctc } = req.body
     
        let preference = {
            "preferedlocation": prefloc,
            "noticeperiod": noticeperiod,
            "department": department,
            "expacted_ctc": expectedctc,
            "current_ctc": currentctc
            
        };
        console.log(preference);
        let sql = `update preferences set ? where candid=?`;
        
        let [result] = await conn.query(sql, [preference, bid])
        console.log(bid);
   
}



exports.searchformm = async (req, res) => {

    return res.render("job_next_prev/home", {
        route: "/", basicdetail: null, educationdetial: [], workexperience: [], languageknown: [],
        technologyknown: [], reference: [], preference: null, message: ""
    })
}
exports.searchcomboo = async (req, res) => {
    try {
        let { fname, currdesignation, email, gender, address, state, lname, dob, phone, relnstatus,
            city, zipcode, sscnameofboard, sscpassingyear, sscpercentage, hscnameofboard, hscpassingyear,
            hscpercentage, bachelorcourse, bachelorpassingyear, bachelorpercentage, mastercourse,
            masterpassingyear, masterpercentage, companyname, designation, from, to, lang1, langcheck1, lang2, langcheck2, lang3,
            langcheck3, php, phptech, mysql, mysqltech, oracle, oracletech, laravel, laraveltech, name, contactnum, relation,
            prefloc, noticeperiod, department, expectedctc, currentctc } = req.body;

        if (
            !fname || !currdesignation || !email || !gender || !address || !state || !lname || !dob || !phone || !relnstatus || !city ||
            !zipcode ||

            !sscnameofboard || !sscpassingyear || !sscpercentage ||
            !hscnameofboard || !hscpassingyear || !hscpercentage ||

            (!lang1 && langcheck1) || (lang1 && !langcheck1) || (!lang2 && langcheck2) || (lang2 && !langcheck2) || (!lang3 && langcheck3) || (lang3 && !langcheck3) ||

            (!php && phptech) || (php && !phptech) || (!mysql && mysqltech) || (mysql && !mysqltech) ||
            (!oracle && oracletech) || (oracle && !oracletech) || (!laravel && laraveltech) || (laravel && !laraveltech) ||

            !prefloc || !noticeperiod || !department || !expectedctc || !currentctc ||

            (!bachelorcourse && (bachelorpassingyear || bachelorpercentage)) ||
            (bachelorcourse && (!bachelorpassingyear || !bachelorpercentage)) ||
            (!mastercourse && (masterpassingyear || masterpercentage)) ||
            (mastercourse && (!masterpassingyear || !masterpercentage)) ||

            (mastercourse && !bachelorcourse)

        ) {
            return res.json({
                success: false,
                message: " missing sum record fill the details "
            });
        }
        else {

            if (!(lang1 && langcheck1) && !(lang3 && langcheck3) && !(lang2 && langcheck2)) {
                return res.json({
                    success: false, message: "please fill one language"
                });
            }
            for (let i = 0; i < companyname.length; i++) {
                if ((!companyname[i] && (designation[i] || from[i] || to[i])) || (companyname[i] && (!designation[i] || !from[i] || !to[i]))) {

                    return res.json({
                        success: false, message: " selected company"
                    });
                }
            }
            for (let i = 0; i < name.length; i++) {
                if ((!name[i] && (contactnum[i] || relation[i])) || (name[i] && (!contactnum[i] || !relation[i]))) {
                    return res.json({ success: false, message: "selected reference" });
                }
            }
            let sql = `select * from basicdetails where email="${email}" limit 1;`;
            let [result] = await conn.query(sql);

            if (result.length == 1) {
                return res.json({ success: false });
            }
            else {

                let bid = await basicdetails(req, res);
                let educationdeatil = await educationdeatils(req, res, bid)
                let workexperiences = await workexperience(req, res, bid)

                if ((lang1 && langcheck1) || (lang2 && langcheck2) || (lang3 && langcheck3)) {
                    language = await languageknown(req, res, bid);
                }

                if ((php && phptech) || (laravel && laraveltech) || (oracle && oracletech) || (mysql && mysqltech)) {
                    technology = await technologyknown(req, res, bid);
                }

                let reference = await references(req, res, bid);
                let preference = await preferences(req, res, bid);

                return res.json({ success: true, message: "inserted" });

            }
        }

    } catch (error) {
        return res.status(500).json({
            return: false,
            message: error.message,
            messeage: "9"
        })
    }




}

exports.searchh = async (req, res) => {

    let id = Number(req.params.id);
    let basicdetail = await getdata(req, res, "basicdetails", id, "candid")
    let educationdetial = await getdata(req, res, "educationdetails", id, "eid")
    let workexperience = await getdata(req, res, "workexperiences", id, "wid")
    let languageknown = await getdata(req, res, "languageknowns", id, "lkid")
    let technologyknown = await getdata(req, res, "technologyknowns", id, "tid")
    let reference = await getdata(req, res, "reference", id, "refid")
    let preference = await getdata(req, res, "preferences", id, "pid")

    return res.render("job_next_prev/home", {
        route: "/",
        basicdetail: basicdetail[0], educationdetial: educationdetial, workexperience: workexperience, languageknown: languageknown,
        technologyknown: technologyknown, reference: reference, preference: preference[0], message: ""
    })
}







exports.updateformm = async (req, res) => {
    try {


        let { candid, fname, currdesignation, email, gender, address, state, lname, dob, phone, relnstatus,
            city, zipcode, sscnameofboard, sscpassingyear, sscpercentage, hscnameofboard, hscpassingyear,
            hscpercentage, bachelorcourse, bachelorpassingyear, bachelorpercentage, mastercourse,
            masterpassingyear, masterpercentage, companyname, designation, from, to, lang1, langcheck1, lang2, langcheck2, lang3,
            langcheck3, php, phptech, mysql, mysqltech, oracle, oracletech, laravel, laraveltech, name, contactnum, relation,
            prefloc, noticeperiod, department, expectedctc, currentctc } = req.body

        if (!fname || !currdesignation || !email || !gender || !address || !state || !lname || !dob || !phone || !relnstatus || !city || !zipcode

            || !sscnameofboard || !sscpassingyear || !sscpercentage ||
            !hscnameofboard || !hscpassingyear || !hscpercentage ||

            (!lang1 && langcheck1) || (lang1 && !langcheck1) || (!lang2 && langcheck2) || (lang2 && !langcheck2) || (!lang3 && langcheck3) || (lang3 && !langcheck3) ||

            (!php && phptech) || (php && !phptech) || (!mysql && mysqltech) || (mysql && !mysqltech) ||
            (!oracle && oracletech) || (oracle && !oracletech) || (!laravel && laraveltech) || (laravel && !laraveltech) ||

            !prefloc || !noticeperiod || !department || !expectedctc || !currentctc ||

            (!bachelorcourse && (bachelorpassingyear || bachelorpercentage)) ||
            (bachelorcourse && (!bachelorpassingyear || !bachelorpercentage)) ||
            (!mastercourse && (masterpassingyear || masterpercentage)) ||
            (mastercourse && (!masterpassingyear || !masterpercentage)) ||

            (mastercourse && !bachelorcourse)

        ) {
            

            return res.json({
                success: false, message: " fill all field"
            });

        } else {

            if (!(lang1 && langcheck1) && !(lang3 && langcheck3) && !(lang2 && langcheck2)) {

                return res.json({
                    success: false,message: "please choose one language"
                });

               
            }


            for (let i = 0; i < companyname.length; i++) {
                if ((!companyname[i] && (designation[i] || from[i] || to[i])) || (companyname[i] && (!designation[i] || !from[i] || !to[i]))) {
                    return res.json({
                        success: false,message: "please fill all field of selected company"
                    });
                   
                }

            }

            for (let i = 0; i < name.length; i++) {
                if ((!name[i] && (contactnum[i] || relation[i])) || (name[i] && (!contactnum[i] || !relation[i]))) {
                    
                    return res.json({
                        success: false, message: "please fill all field of selected reference"
                    });
                    
                }

            }


            await updatebasic(req, res, candid)

            await updateeducation(req, res, candid)

            await updateworkexperience(req, res, candid)

            await updatelanguageknowns(req, res, candid)

            await updatetechnology(req, res, candid)

            await updatereference(req, res, candid)

            await updatepreference(req, res, candid)



            return res.json({
                success: false, message: "updated successfully"
            });
            
            
        }
    } catch (error) {
        return res.status(500).json({
            return: false,
            message: "updated",

        })
    }


}

exports.resultss = async (req, res) => {
    let sql = `select * from basicdetails`;
    [result] = await conn.query(sql,)

    res.render("job_next_prev/show", { result });

}

exports.showw = async (req, res) => {

    let id = Number(req.params.id);
    let basicdetail = await getdata(req, res, "basicdetails", id, "candid")
    let educationdetial = await getdata(req, res, "educationdetails", id, "eid")
    let workexperience = await getdata(req, res, "workexperiences", id, "wid")
    let languageknown = await getdata(req, res, "languageknowns", id, "lkid")
    let technologyknown = await getdata(req, res, "technologyknowns", id, "tid")
    let reference = await getdata(req, res, "reference", id, "refid")
    let preference = await getdata(req, res, "preferences", id, "pid")

    return res.json({
        route: "/updatee",
        basicdetail: basicdetail[0], educationdetial: educationdetial, workexperience: workexperience, languageknown: languageknown,
        technologyknown: technologyknown, reference: reference, preference: preference[0], message: ""
    })
}








