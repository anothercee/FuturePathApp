function calculate(){

let q1 = document.getElementById("q1").value
let q2 = document.getElementById("q2").value

let result = document.getElementById("testResult")

if(q1 === "tech" && q2 === "tech"){
result.innerText = "Jurusan cocok: Informatika / Data Science"
}

else if(q1 === "business"){
result.innerText = "Jurusan cocok: Manajemen / Akuntansi"
}

else{
result.innerText = "Jurusan cocok: Ilmu Komunikasi / Psikologi"
}

}
