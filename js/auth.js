function login(){

let name = document.getElementById("name").value
let email = document.getElementById("email").value

localStorage.setItem("name",name)
localStorage.setItem("email",email)

window.location.href = "index.html"

}
