let users = JSON.parse(localStorage.getItem("users")) || [

{username:"admin",password:"1234",role:"Admin"},
{username:"agent1",password:"1111",role:"Agent"},
{username:"agent2",password:"2222",role:"Agent"}

];

let tickets = JSON.parse(localStorage.getItem("tickets")) || [];

let ticketID = tickets.length + 1;