  async function  validate() {
        let require = document.querySelectorAll(".required");
        let validate = document.querySelectorAll(".validate");
        let y = true;

        validate.forEach(element => {
            element.remove();

        });

        require.forEach(d => {
            if (d.value.trim() == "") {
                let span = document.createElement("span");
                d.insertAdjacentElement("afterend",span);
                span.classList.add("validate")
                span.textContent = "*Required"
                span.style.color = "blue"
                span.style.fontSize = "12px"
                span.style.margin = "0 5px"
            }
        });


       
    }


   let y= document.getElementById("submit");

   y.addEventListener("click", async function(e)
   {
        e.preventDefault();
        console.log("j");
        if (validate()) {
            let username=document.getElementById(username).value
            let email=document.getElementById(email).value
            let phone=document.getElementById(phone).value
            let password=document.getElementById(password).value
            let conformpassword=document.getElementById(conformpassword).value
           

            console.log(username);
          


            let datas = await fetch(`http://localhost:8100/y`,
            {
                method: "post",
                body:JSON.stringify({username,phone,email,password,conformpassword}),
                headers: {
                    "Content-Type": "application/json"
                }

            });
        let d = await datas.json();
        console.log(d);

        }
   
   });

