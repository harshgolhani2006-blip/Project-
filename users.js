function loadUsers(){

let table=document.getElementById("userTable");

table.innerHTML="";

users.forEach((u,i)=>{

let row=table.insertRow();

row.insertCell(0).innerHTML=u.username;

row.insertCell(1).innerHTML=u.role;

row.insertCell(2).innerHTML=
"<button onclick='deleteUser("+i+")'>Delete</button>";

});

}


function addUser(){

let name=document.getElementById("newUser").value;

let pass=document.getElementById("newPass").value;

let role=document.getElementById("role").value;

users.push({username:name,password:pass,role:role});

localStorage.setItem("users",JSON.stringify(users));

loadUsers();
loadAgents();

}


function deleteUser(i){

users.splice(i,1);

localStorage.setItem("users",JSON.stringify(users));

loadUsers();

}