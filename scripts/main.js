

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    $("#hamburger").fadeOut();
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $("#hamburger").fadeIn();
}

function parseInput(){
    var fName = document.getElementById('formFName').value;
    var lName = document.getElementById('formLName').value;
    
    var subject = document.getElementById('formSubject').value;
    var body = document.getElementById('formMessage').value;

    var text = 'Subject: ' + subject + '\n\nMessage: ' + body;    
    document.getElementById('names').value = fName + ' ' + lName;

    document.getElementById('goodMessages').value = text;

    // submit
    document.getElementById('actualSubmit').click();
}
