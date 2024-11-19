function validateForm() {
    var username = document.getElementById("em").value;
    var password = document.getElementById("pass").value;

    if (username.trim() === '' || password.trim() === '') {
        alert("Please enter both username and password.");
        return false; // Prevent form submission
    }

    // If everything is filled out, allow form submission
    return true;
}