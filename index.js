function formValidation(event){
    event.preventDefault();

    let username = document.forms["contact"]["name"].value;
    let email = document.forms["contact"]["email"].value;
    let number = document.forms["contact"]["number"].value;
    let emailsubject = document.forms["contact"]["emailsubject"].value;

    let usernameRegex = /^[a-zA-Z0-9]{3,}$/;
    let emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/;
    let numberRegex = /^[0-9]$/;
    let emailsubjectRegex = /^[a-zA-Z]$/;
    if (!emailRegex.test(email)) {
        alert("Email is invalid");
        return false;
    }
    if (!usernameRegex.test(username)) {
        alert("Name is invalid");
        return false;
    }
    if (!emailsubjectRegex.test(emailsubject)) {
        alert("email is invalid");
        return false;
    }
    if(!numberRegex.test(number)){
        alert("Number is invalid");
        return false;
    }
    console.log(username + email + number + emailsubject);
    alert("Form is Submitted Successfully");
    return true;
}