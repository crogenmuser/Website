$(document).ready(function () {
    //your code here
    
  });
 

function openNav() {
document.getElementById("mySidenav").style.width = "250px";
//document.getElementById("hamburger").style.display = "none";
$("#hamburger").fadeOut();
}

/* Set the width of the side navigation to 0 */
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
//document.getElementById("hamburger").style.display = "block";
$("#hamburger").fadeIn();
}