function check(){

let score = document.getElementById("score").value
let result = document.getElementById("result")

let chance = 0

if(score >= 85){
chance = 80
result.innerText = "Peluang Tinggi"
}

else if(score >= 75){
chance = 50
result.innerText = "Peluang Sedang"
}

else{
chance = 20
result.innerText = "Peluang Rendah"
}

const ctx = document
.getElementById("chart")

new Chart(ctx,{

type:"bar",

data:{
labels:["Peluang Lolos"],
datasets:[{
label:"Persentase",
data:[chance]
}]
}

})

}
