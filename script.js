function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Set the correct username and password
    const correctUsername = "Drew";
    const correctPassword = "Howdyshell";

    // Check if the entered credentials are correct
    if (username === correctUsername && password === correctPassword) {
        // Redirect to the Dropbox PDF link
        window.location.href = "https://www.dropbox.com/scl/fi/ujat57s5h01grcg2dlrbi/Terms-Of-Service-1.pdf?rlkey=6aov6anvaapu5r7ek8h792vzz&st=dux7fc5q&raw=1";
    } else {
        // Show an error message if credentials are incorrect
        errorMessage.textContent = "Incorrect username or password. Try again.";
    }
}

