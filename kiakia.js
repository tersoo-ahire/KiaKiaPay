// JavaScript for responsive navigation
function myFunction() {
    var x = document.getElementById("myTopnavk");
    if (x.className === "topnavk") {
        x.className += " responsive";
    } else {
        x.className = "topnavk";
    }
}

// Javascript for chat widget
function myFunctionbox() {
     var x = document.getElementById("chatcon")
     if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Javascript for bank dashboard
function myFunctionbank() {
     var x = document.getElementById("bank")
     if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// JavaScript for src element change on
function functionlight() {
     document.getElementById('light').src='pictures/lighton.gif';
}

// JavaScript for src element change off
function functionlights() {
     document.getElementById('light').src='pictures/lightoff.gif';

}

// Javascript statements
function functionnumber(){
let  FirstName = "Ahire  ";
     LastName = "Tersoo";
     var z = FirstName + LastName;
     document.getElementById('number1').innerHTML = z;
}

console.log('Hello World');

// Javascript console
function functionconsole(){
     const draco = "Bambara";
          document.getElementById('dracos').innerHTML = draco;
}
