/* CREATE TICKET */

function createTicket(){

let title = document.getElementById("title").value;
let issue = document.getElementById("issue").value;
let agent = document.getElementById("agent").value;

if(title === ""){
alert("Please enter ticket title");
return;
}

let group = "";

if(issue === "Regarding Certificates"){
group = "Certificates Team";
}
else{
group = "Platform Team";
}

let ticket = {

id: ticketID++,
title: title,
issue: issue,
group: group,
agent: agent,
status: "Open"

};

tickets.push(ticket);

localStorage.setItem("tickets", JSON.stringify(tickets));

notify("Ticket Created Successfully");

document.getElementById("title").value="";

loadTickets();

}


/* LOAD TICKETS */

function loadTickets(){

let table = document.getElementById("ticketTable");

table.innerHTML = "";

let open = 0;
let closed = 0;

tickets.forEach((t,i)=>{

let row = table.insertRow();

row.insertCell(0).innerHTML = t.id;
row.insertCell(1).innerHTML = t.title;
row.insertCell(2).innerHTML = t.issue;
row.insertCell(3).innerHTML = t.group;
row.insertCell(4).innerHTML = t.agent;

let statusCell = row.insertCell(5);

if(t.status === "Open"){

statusCell.innerHTML = "<span style='color:green;font-weight:bold;'>Open</span>";
open++;

}
else{

statusCell.innerHTML = "<span style='color:red;font-weight:bold;'>Closed</span>";
closed++;

}

row.insertCell(6).innerHTML =
"<button onclick='closeTicket("+i+")'>Close</button> " +
"<button onclick='deleteTicket("+i+")' style='background:red;color:white;'>Delete</button>";

});


/* UPDATE STATS */

document.getElementById("totalTickets").innerHTML = tickets.length;
document.getElementById("openTickets").innerHTML = open;
document.getElementById("closedTickets").innerHTML = closed;


/* UPDATE CHART */

updateChart(open,closed);

}


/* CLOSE TICKET */

function closeTicket(index){

tickets[index].status = "Closed";

localStorage.setItem("tickets", JSON.stringify(tickets));

notify("Ticket Closed");

loadTickets();

}


/* DELETE TICKET */

function deleteTicket(index){

let confirmDelete = confirm("Are you sure you want to delete this ticket?");

if(confirmDelete){

tickets.splice(index,1);

localStorage.setItem("tickets", JSON.stringify(tickets));

notify("Ticket Deleted");

loadTickets();

}

}