function check(){

let score = document.getElementById("score").value
let result = document.getElementById("result")

if(score >= 85){
result.innerText = "Peluang Tinggi"
}
else if(score >= 75){
result.innerText = "Peluang Sedang"
}
else{
result.innerText = "Peluang Rendah"
}

}
