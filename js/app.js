function go(page){
window.location.href = page
}

let name = localStorage.getItem("name") || "Student"

document.getElementById("greeting").innerText =
"Hi, " + name
