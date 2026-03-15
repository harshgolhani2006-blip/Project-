function loadAgents(){

let select=document.getElementById("agent");

select.innerHTML="";

users.filter(u=>u.role==="Agent")
.forEach(a=>{

let option=document.createElement("option");

option.text=a.username;

select.add(option);

});

}