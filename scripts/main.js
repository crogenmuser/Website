

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    $("#hamburger").fadeOut();
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $("#hamburger").fadeIn();
}