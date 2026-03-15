function notify(msg){

let box=document.getElementById("notification");

box.innerHTML=msg;

box.style.display="block";

setTimeout(()=>{

box.style.display="none";

},3000);

}