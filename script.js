function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Set the correct username and password
    const correctUsername = "Drew";
    const correctPassword = "Howdyshell";

    // Check if the entered credentials are correct
    if (username === correctUsername && password === correctPassword) {
        // Redirect to the Google Drive PDF link
        window.location.href = "https://drive.google.com/file/d/1O8rLUZsWmYvU-mP6FMBc9p72a0dBWwqJ/view?usp=sharing";
    } else {
        // Show an error message if credentials are incorrect
        errorMessage.textContent = "Incorrect username or password. Try again.";
    }
}
