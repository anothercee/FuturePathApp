const list = document.getElementById("majorList")
const detail = document.getElementById("majorDetail")

function renderMajors(data){

list.innerHTML=""

data.forEach(m=>{

let li = document.createElement("li")
li.innerText = m.name

li.onclick = ()=>{
showDetail(m)
}

list.appendChild(li)

})

}

function showDetail(major){

detail.innerHTML = `
<h3>${major.name}</h3>
<p>Prospek Karir:</p>
<ul>
${major.career.map(c=>`<li>${c}</li>`).join("")}
</ul>
`

}

function searchMajor(){

let keyword =
document.getElementById("search")
.value
.toLowerCase()

let filtered = majors.filter(m =>
m.name.toLowerCase().includes(keyword)
)

renderMajors(filtered)

}

renderMajors(majors)
