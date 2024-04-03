function validate() {
    let require = document.querySelectorAll(".required");
    let validate = document.querySelectorAll(".validate");
    let male = document.getElementById("male")
    let female = document.getElementById("female")
    let bachelor = document.querySelectorAll(".bachelor input")
    let master = document.querySelectorAll(".master input")
    let exp=document.querySelectorAll(".exp")
    let ref = document.querySelectorAll(".ref")
    let lang = document.querySelectorAll(".lang1")
    let tech = document.querySelectorAll(".tech1")
    let refnumber = document.querySelectorAll(".refnumber")
    let dates = document.querySelectorAll(".dates")
    let passingyear = document.querySelectorAll(".passingyear")

    let a = true;
    validate.forEach(data => {
        data.remove()
    })
  
    require.forEach((data) => {
         if ((data.value.trim() === "")) {
            a = false
            let span = document.createElement("span")
            data.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = "*Required"
            span.style.color = "blue"
            span.style.fontSize = "12px"
            span.style.margin = "0 5px"
        }
      if (data.name == "phone" && isNaN(data.value)) {
            a = false;
            let span = document.createElement("span")
            data.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = `*Phone number must be of Number`
            span.style.color = "blue"
            span.style.fontSize = "12px"
            span.style.margin = "0 5px"

        }

        if (data.name == "phone" && data.value.trim() != "" && !isNaN(data.value) && data.value.length != 10) {
            a = false;
            let span = document.createElement("span")
            data.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = "*Phone number must be of 10 digit"
            span.style.color = "blue"
            span.style.fontSize = "12px"
            span.style.margin = "0 5px"
            console.log("he");
        }
        if (data.name == "currentctc" && data.value.trim() != "" && isNaN(data.value)) {
            a = false;
            let span = document.createElement("span")
            data.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = `*Current CTC must be of Number`
            span.style.color = "blue"
            span.style.fontSize = "12px"
            span.style.margin = "0 5px"
        }
        if (data.name == "expectedctc" && isNaN(data.value)) {
            a = false;
            let span = document.createElement("span")
            data.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = `*Expected CTC must be of Number`
            span.style.color = "blue"
            span.style.fontSize = "12px"
            span.style.margin = "0 5px"
         }

        let regexemail = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

        if (data.name == "email" && data.value.trim() != "" && !(data.value.match(regexemail))) {
            let span = document.createElement("span")
            data.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = "*email is not valid"
            span.style.color = "blue"
            span.style.fontSize = "12px"
            span.style.margin = "0 5px"
            a = false;
        }

        //check for dates
        if (data.name == "dob" && data.value.trim() != "") {
            let date = new Date(data.value)
            if (isNaN(date)) {
                let span = document.createElement("span")
                data.insertAdjacentElement("afterend", span)
                span.classList.add("validate")
                span.textContent = "*date is not valid"
                span.style.color = "blue"
                span.style.fontSize = "12px"
                span.style.margin = "0 5px"
                return false;
            }
        }

        if ((data.name == "sscpassingyear" || data.name == "hscpassingyear") && isNaN(data.value)) {
            let span = document.createElement("span")
            data.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = "*passing year must be number"
            span.style.color = "blue"
            span.style.fontSize = "12px"
            span.style.margin = "0 5px"
            return false;
        }

        if ((data.name == "sscpassingyear" || data.name == "hscpassingyear") && data.value.trim() != "" && !isNaN(data.value) && data.value.length != 4) {
            let span = document.createElement("span")
            data.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = "*passing year must be 4 digit"
            span.style.color = "blue"
            span.style.fontSize = "12px"
            span.style.margin = "0 5px"
            return false;
        }
    });

    if (!male.checked && !female.checked && !other.checked) {
     
        let span = document.createElement("span");
        document.querySelector("label[for=gender]").insertAdjacentElement("afterend", span)
        span.classList.add("validate")
        span.textContent = "*Required"
        span.style.color = "blue"
        span.style.fontSize = "12px"
        span.style.margin = "0 5px"
        return false;
    }
  
    let bachelorvalue = [];
    bachelor.forEach(element => {
        bachelorvalue.push(element.value)
    });


    bachelorvalue.forEach(element => {
        if (element !== "") {
            let validate = document.querySelectorAll(".bachelor .validate");
            if (validate.length) {
                validate.forEach(data => {
                    data.remove()
                })
            }

            bachelor.forEach(data => {
                if (data.value == "") {
                    a = false;
                    let span = document.createElement("span")
                    data.insertAdjacentElement("afterend", span)
                    span.classList.add("validate")
                    span.textContent = "*"
                    span.style.color = "blue"
                    span.style.fontSize = "14px"
                    span.style.margin = "0 2px"
                }
            })
         }
    });

    passingyear.forEach(py => {
        if (py.value && isNaN(py.value)) {
            a = false
            let span = document.createElement("span")
            py.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = "*it be number"
            span.style.color = "blue"
            span.style.fontSize = "12px"
            span.style.margin = "0 2px"

       
        }

        if (py.value && !isNaN(py.value) && py.value.length != 4) {
            a = false;
            let span = document.createElement("span")
            py.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = "*4 digit only"
            span.style.color = "blue"
            span.style.fontSize = "12px"
            span.style.margin = "0 2px"
         }
    });

    let mastervalue = [];
    master.forEach(element => {
        mastervalue.push(element.value)
    });

    mastervalue.forEach(element => {
        if (element !== "") {
            let validate = document.querySelectorAll(".master .validate");
            if (validate.length) {
                validate.forEach(data => {
                    data.remove()
                })
            }
            master.forEach(data => {
                if (data.value == "") {
                    a = false;
                    let span = document.createElement("span")
                    data.insertAdjacentElement("afterend", span)
                    span.classList.add("validate")
                    span.textContent = "*"
                    span.style.color = "blue"
                    span.style.fontSize = "17px"
                    span.style.margin = "0 5px"
                }

            })
        }
    });


    exp.forEach((data) => {
        let exp = data.querySelectorAll(".exp input")

        let expvalue = []
        exp.forEach(element => {
            expvalue.push(element.value)
        });
    
        expvalue.forEach(element => {
            if (element !== "") {
                let validate = data.querySelectorAll(".exp .validate");
                if (validate.length) {
                    validate.forEach(data => {
                        data.remove()
                    })
                }
                exp.forEach(data => {
                    if (data.value == "") {
                        a = false;
                        let span = document.createElement("span")
                        data.insertAdjacentElement("afterend", span)
                        span.classList.add("validate")
                        span.textContent = "*"
                        span.style.color = "blue"
                        span.style.fontSize = "10px"
                        span.style.margin = "0 auto"
                    }
    
                })
            }
        });
    });
dates.forEach(date => {
        if (date.value) {
            let date1 = new Date(date.value);
            if (isNaN(date1)) {
                a = false;
                let span = document.createElement("span")
                date.insertAdjacentElement("afterend", span)
                span.classList.add("validate")
                span.textContent = "*it be a date"
                span.style.color = "blue"
                span.style.fontSize = "10px"
                span.style.margin = "0"

            }
        }
    })
  

    ref.forEach(data => {
        let ref = data.querySelectorAll(".ref input")
        let refvalue = [];
        ref.forEach(element => {
            refvalue.push(element.value)
        });
    refvalue.forEach(element => {
            if (element !== "") {
                let validate = data.querySelectorAll(".ref .validate");
                if (validate.length) {
                    validate.forEach(data => {
                        data.remove()
                    })
                }
                ref.forEach(data => {
                    if (data.value == "") {
                        a = false;
                        let span = document.createElement("span")
                        data.insertAdjacentElement("afterend", span)
                        span.classList.add("validate")
                        span.textContent = "*"
                        span.style.color = "blue"
                        span.style.fontSize = "10px"
                        span.style.margin = "0 5px"
    
            
    
                    }
    
                })
            }
        });
    });
    refnumber.forEach(ref => {
        if ((ref.name == "contactnum1" || ref.name == "contactnum2") && isNaN(ref.value)) {
            a = false;
            let span = document.createElement("span")
            ref.insertAdjacentElement("afterend", span)
            span.classList.add("validate")
            span.textContent = "*it must be number"
            span.style.color = "blue"
            span.style.fontSize = "10px"
            span.style.margin = "0 5px"
            
        }
    })
    let langvalue = [];
    lang.forEach(data => {
        langvalue.push(data.checked);
    })

   
    if (!langvalue.includes(true)) {
        a = false;
        let span = document.createElement("span");
        document.querySelector(".error").insertAdjacentElement("afterend", span)
        span.classList.add("validate")
        span.textContent = "*please select one language"
        span.style.color = "blue"
        span.style.fontSize = "10px"
        span.style.margin = "0"
        
    }

   
    lang.forEach((data, i) => {
        if (data.checked == true) {

            let check = document.querySelectorAll(".check")
            let checkinput = check[i].querySelectorAll("input")
          
            let checkval = []
            checkinput.forEach(data => {
                checkval.push(data.checked);
            })
            if (!checkval.includes(true)) {
                a = false;
                let span = document.createElement("span");
                check[i].insertAdjacentElement("afterend", span)
                span.classList.add("validate")
                span.textContent = "*please select one option"
                span.style.color = "blue"
                span.style.fontSize = "10px"
                span.style.margin = "0 5px"
              
            }
        }

        if (data.checked == false) {

            let check = document.querySelectorAll(".check")
            let checkinput = check[i].querySelectorAll("input")
            
            let checkval = []
            checkinput.forEach(data => {
                checkval.push(data.checked);
            })
            if (checkval.includes(true)) {
                a = false;
                let span = document.createElement("span");
                check[i].insertAdjacentElement("afterend", span)
                span.classList.add("validate")
                span.textContent = "*please select one lang"
                span.style.color = "blue"
                span.style.fontSize = "10px"
                span.style.margin = "0 5px"
               
            }
        }

    })


    let techval = []
    tech.forEach(element => {
        techval.push(element.checked)
    });

 
    tech.forEach((data, i) => {
        if (data.checked == true) {

            let techs = document.querySelectorAll(".techvalue")
            let techinput = techs[i].querySelectorAll("input")

            let techsval = []
            techinput.forEach(data => {
                techsval.push(data.checked);
            })
            if (!techsval.includes(true)) {
                a = false;
                let span = document.createElement("span");
                techs[i].insertAdjacentElement("afterend", span)
                span.classList.add("validate")
                span.textContent = "*please select one option"
                span.style.color = "blue"
                span.style.fontSize = "10px"
                span.style.margin = "0 5px"
              
            }
        }

        if (data.checked == false) {

            let techs = document.querySelectorAll(".techvalue")
            let techinput = techs[i].querySelectorAll("input")

            let techsval = []
            techinput.forEach(data => {
                techsval.push(data.checked);
            })
            if (techsval.includes(true)) {
                a = false;
                let span = document.createElement("span");
                techs[i].insertAdjacentElement("afterend", span)
                span.classList.add("validate")
                span.textContent = "*please select  technology"
                span.style.color = "blue"
                span.style.fontSize = "10px"
                span.style.margin = "0 5px"
             }
        }
    })
 return a;
}