let add = document.querySelector("#addcolum")
let del = document.querySelector("#deletecolum")
let addref = document.querySelector("#addreference")
let delref = document.querySelector("#deletereference")

let exp = document.querySelectorAll(".exp")
if (exp.length == 3) {
    del.setAttribute("disabled", "true")
}

let ref = document.querySelectorAll(".ref")
if (ref.length == 2) {
    delref.setAttribute("disabled", "true")
}

let works = document.querySelector(".works")
let refs = document.querySelector(".refs")
console.log(refs);
let data;

add.addEventListener("click", function (e) {
    e.preventDefault()

    let company = document.createElement("div")
    company.classList.add("exp")
    company.innerHTML = `<label for="companyname3">Company Name:</label>
    <input type="text" name="companyname[]" id="companyname3" >
    <label for="designation3">Designation:</label>
    <input type="text" name="designation[]" id="designation3" >
    <label for="from3">From:</label>
    <input type="text" name="from[]" id="from3" class="dates" >
    <label for="to3">To :</label>
    <input type="text" name="to[]" id="to3" class="dates" >`
    works.appendChild(company)

    if (del.hasAttribute("disabled")) {
        del.removeAttribute("disabled")
    }
})





del.addEventListener("click", function (e) {
    e.preventDefault()
    let exp = document.querySelectorAll(".exp")

    if (exp.length == 4) {
        del.setAttribute("disabled", "true")
    }
    if (exp.length > 3) {

        exp[exp.length - 1].remove()
    }

})


addref.addEventListener("click", function (e) {
    e.preventDefault()

    let reference = document.createElement("div")
    reference.classList.add("ref")

    reference.innerHTML = `<label for="name">Name:
    <input type="text" name="name[]" id="name"  ></label>
    <label for="contactnum">Contact Number:
    <input type="text" name="contactnum[]" id="contactnum" class="refnumber" ></label>
    <label for="relation">Relation:
    <input type="text" name="relation[]" id="relation" ></label>`

    refs.appendChild(reference)

    if (delref.hasAttribute("disabled")) {
        delref.removeAttribute("disabled")
    }
})


delref.addEventListener("click", function (e) {
    e.preventDefault()
    let ref = document.querySelectorAll(".ref")

    if (ref.length == 3) {
        delref.setAttribute("disabled", "true")
    }
    if (ref.length > 2) {

        ref[ref.length - 1].remove()
    }

})