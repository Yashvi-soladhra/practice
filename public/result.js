let display=async ()=>
{

    let y=window.location.pathname;




let datas = await fetch(`http://localhost:8200/u${y}`,
{
        method: "GET",
        // body: data,
        headers: {
            "Content-Type": "application/json"
        }

    });
let d = await datas.json();
showdata(d);
console.log(d);
}

let showdata = async (d) => 
{
    
    document.getElementById("candid").value=d.basicdetail.candid;
    document.getElementById("fname").value=d.basicdetail.fname;
    document.getElementById("lname").value=d.basicdetail.lname;
    document.getElementById("designation").value=d.basicdetail.designation;
    document.getElementById("dob").value=d.basicdetail.dob;
    document.getElementById("email").value=d.basicdetail.email;
    document.getElementById("phone").value=d.basicdetail.phone;
    

    if (d.basicdetail.gender=="Male")
    {
      document.getElementById("male").checked=true;
    }
    else if (d.basicdetail.gender=="Female")
    {
        document.getElementById("female").checked=true;   
    }
    document.getElementById("state").value=d.basicdetail.state;
    document.getElementById("relnstatus").value=d.basicdetail.reln_status;

    document.getElementById("address").value=d.basicdetail.address;
    document.getElementById("city").value=d.basicdetail.city;
    document.getElementById("zipcode").value=d.basicdetail.zipcode;


    //aducation-details
    //ssc
    document.getElementById("sscnameofboard").value=d.educationdetial[0].coursename_nameofboard;
    document.getElementById("sscpassingyear").value=d.educationdetial[0].passingyear;

    document.getElementById("sscpercentage").value=d.educationdetial[0].percentage;
   

    //hsc
    
    document.getElementById("hscnameofboard").value=d.educationdetial[1].coursename_nameofboard;
    document.getElementById("hscpassingyear").value=d.educationdetial[1].passingyear;

    document.getElementById("hscpercentage").value=d.educationdetial[1].percentage;

    // bachelorcourse, bachelorpassingyear, bachelorpercentage

    if (d.educationdetial[2]) {
        document.getElementById("bachelorcourse").value=d.educationdetial[2].coursename_nameofboard;
        document.getElementById("bachelorpassingyear").value=d.educationdetial[2].passingyear;
    
        document.getElementById("bachelorpercentage").value=d.educationdetial[2].percentage;
    }
   

//mastercourse, masterpassingyear, masterpercentage
    if (d.educationdetial[3]) {
        document.getElementById("mastercourse").value=d.educationdetial[3].coursename_nameofboard;
        document.getElementById("masterpassingyear").value=d.educationdetial[3].passingyear;
    
        document.getElementById("masterpercentage").value=d.educationdetial[3].percentage;
    }

    let hindi=document.getElementById("hindi");
    let gujrati=document.getElementById("gujrati");
    let english =document.getElementById("english");
    d.languageknown.forEach(a => {
        if(a.language=="hindi"){
            hindi.checked=true; 
            let lang=document.getElementsByName("langcheck1[]")
            if(a.canread==1)
            {
                lang[0].checked=true;
            }
            if(a.canspeak==1)
            {
                lang[1].checked=true;
            }
            if(a.canwrite==1)
            {
                lang[2].checked=true;
            }
    
        }
        else if(a.language=="gujrati")
        {
            gujrati.checked=true; 
            let lang=document.getElementsByName("langcheck2[]")
            if(a.canread==1)
            {
                lang[0].checked=true;
            }
            if(a.canspeak==1)
            {
                lang[1].checked=true;
            }
            if(a.canwrite==1)
            {
                lang[2].checked=true;
            }
    
        }
       else if(a.language=="english")
        {
            english.checked=true; 
            let lang=document.getElementsByName("langcheck3[]")
            if(a.canread==1)
            {
                lang[0].checked=true;
            }
            if(a.canspeak==1)
            {
                lang[1].checked=true;
            }
            if(a.canwrite==1)
            {
                lang[2].checked=true;
            }
    
        }

     

    });

    

    let php=document.getElementById("php");
    let mysql=document.getElementById("mysql");
    let oracle =document.getElementById("oracle");
    let laravel =document.getElementById("laravel");
   
     
  d.technologyknown.forEach(a => {
        if(a.techname=="php")
        {
            php.checked=true; 
            let teq=document.getElementsByName("phptech")
            if(a.level=="Beginner")
            {
                teq[0].checked=true;
            }
            if(a.level=="Midetor")
            {
                teq[1].checked=true;
            }
            if(a.level=="Expert")
            {
                teq[2].checked=true;
            }
    
        }
       else if(a.techname=="mysql")
        {
            mysql.checked=true; 
            let teq=document.getElementsByName("mysqltech")
            if(a.level=="Beginner")
            {
                teq[0].checked=true;
            }
            if(a.level=="Midetor")
            {
                teq[1].checked=true;
            }
            if(a.level=="Expert")
            {
                teq[2].checked=true;
            }
    
        }
        else if(a.techname=="oracle")
        {
            oracle.checked=true; 
            let teq=document.getElementsByName("oracletech")
            if(a.level=="Beginner")
            {
                teq[0].checked=true;
            }
            if(a.level=="Midetor")
            {
                teq[1].checked=true;
            }
            if(a.level=="Expert")
            {
                teq[2].checked=true;
            }
    
        }
        else if(a.techname=="laravel")
        {
            laravel.checked=true; 
            let teq=document.getElementsByName("laraveltech")
            if(a.level=="Beginner")
            {
                teq[0].checked=true;
            }
            if(a.level=="Midetor")
            {
                teq[1].checked=true;
            }
            if(a.level=="Expert")
            {
                teq[2].checked=true;
            }
    
        }
        
      
     

    });
    if (d.reference[0]) {
        document.getElementById("name").value=d.reference[0].person_name;
        document.getElementById("contactnum").value=d.reference[0].contactnum;
        document.getElementById("relation").value=d.reference[0].relation
    
    }

  
    if(d.reference[1])
    {
        document.getElementById("ref1").value=d.getElementById[1].refid;
        document.getElementById("name").value=d.reference[1].person_name;
        document.getElementById("contactnum").value=d.reference[1].contactnum;
        document.getElementById("relation").value=d.reference[1].relation

    }

    
     
 
   //pref

   document.getElementById("prefloc").value=d.preference.preferedlocation;
   document.getElementById("noticeperiod").value=d.preference.noticeperiod; 
   document.getElementById("department").value=d.preference.department;
   document.getElementById("expectedctc").value=d.preference.expacted_ctc;
   document.getElementById("currentctc").value=d.preference.current_ctc;
   document.getElementById("noticeperiod").value=d.preference.noticeperiod;

    //work
  if(d.workexperience[0])
  {
    document.getElementById("work1").value=d.workexperience[0].wid;
    document.getElementById("companyname1").value=d.workexperience[0].companyname;
    document.getElementById("designation1").value=d.workexperience[0].designation;
    document.getElementById("from1").value=d.workexperience[0].fromdate;
    document.getElementById("to1").value=d.workexperience[0].todate;

  }
   

    if(d.workexperience[1])
    {
        document.getElementById("work2").value=d.workexperience[0].wid;
    document.getElementById("companyname2").value=d.workexperience[1].companyname;
    document.getElementById("designation2").value=d.workexperience[1].designation;
    document.getElementById("from2").value=d.workexperience[1].fromdate;
    document.getElementById("to2").value=d.workexperience[1].todate;

    }
    
    if(d.workexperience[2])
    {
        document.getElementById("work3").value=d.workexperience[0].wid;
        document.getElementById("companyname3").value=d.workexperience[2].companyname;
        document.getElementById("designation3").value=d.workexperience[2].designation;
        document.getElementById("from3").value=d.workexperience[2].fromdate;
        document.getElementById("to3").value=d.workexperience[2].todate;

    }
   

   
  
    
  

    
}
display();
