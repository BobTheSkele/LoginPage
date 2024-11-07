function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Set the desired username and password here
    const correctUsername = "Drew";
    const correctPassword = "Howdyshell";

    // Check if the entered credentials are correct
    if (username === correctUsername && password === correctPassword) {
        // Redirect to the Google Docs link
        window.location.href = "https://docs.google.com/document/d/1Tj_b0_asUkBTjDaA62jFJdLrlBCc2_thev9MP8AHmsg/edit?usp=sharing";
    } else {
        // Show an error message if credentials are incorrect
        errorMessage.textContent = "Incorrect username or password. Try again.";
    }
}
