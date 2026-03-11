const majors = [

"Informatika",
"Sistem Informasi",
"Teknik Elektro",
"Teknik Industri",
"Arsitektur",
"Kedokteran",
"Farmasi",
"Psikologi",
"Manajemen",
"Akuntansi",
"Ilmu Komunikasi",
"Desain Komunikasi Visual",
"Hubungan Internasional",
"Ilmu Hukum",
"Statistika",
"Matematika",
"Biologi",
"Kimia",
"Fisika",
"Data Science"

]

const list = document.getElementById("majorList")

function renderMajors(data){

list.innerHTML=""

data.forEach(m=>{
let li = document.createElement("li")
li.innerText = m
list.appendChild(li)
})

}

function searchMajor(){

let keyword = document
.getElementById("search")
.value
.toLowerCase()

let filtered = majors.filter(m =>
m.toLowerCase().includes(keyword)
)

renderMajors(filtered)

}

renderMajors(majors)
