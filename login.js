function login(){

let u=document.getElementById("username").value;
let p=document.getElementById("password").value;

let user=users.find(x=>x.username===u && x.password===p);

if(user){

document.getElementById("loginPage").classList.add("hidden");
document.getElementById("dashboard").classList.remove("hidden");

document.getElementById("welcomeUser").innerHTML="Welcome "+u;

loadUsers();
loadAgents();
loadTickets();

}

else{

document.getElementById("msg").innerHTML="Invalid Login";

}

}

function logout(){
location.reload();
}