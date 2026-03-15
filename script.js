function applyJob(){

let name=document.getElementById("name").value;
let job=document.getElementById("job").value;

let li=document.createElement("li");

li.innerText=name + " applied for " + job;

document.getElementById("applications").appendChild(li);

}
