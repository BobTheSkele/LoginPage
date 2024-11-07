function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Set the desired username and password here
    const correctUsername = "Drew";
    const correctPassword = "Howdyshell";

    // Check if the entered credentials are correct
    if (username === correctUsername && password === correctPassword) {
        // Redirect to your Google Site URL
        window.location.href = "https://sites.google.com/mevsd.net/drewbucks/home";
    } else {
        // Show an error message if credentials are incorrect
        errorMessage.textContent = "Incorrect username or password. Try again.";
    }
}
