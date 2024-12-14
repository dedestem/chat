import Elements from '../Elements.js';

window.addEventListener("DOMContentLoaded", () => {
    Elements.signupbtn.addEventListener('click', async function () {
        const username = Elements.usernamesp.value; // Changed 'Username' to 'username' (lowercase)

        if (!username) {
            alert('Please enter a valid username');
            return;
        }

        const response = await fetch('https://chat.davidnet.net/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username }) // Changed to 'username' (lowercase)
        });

        const data = await response.json();
        if (data.qrCodeUrl) {
            Elements.authqr.src = data.qrCodeUrl;
            Elements.authqr.style.display = "block";
        } else {
            alert('Error: ' + data.error);
        }
    });
});

window.addEventListener("DOMContentLoaded", () => {
    Elements.signinbtn.addEventListener('click', async function () {
        const username = Elements.username.value; // Changed to lowercase 'username'
        const token = Elements.authcode.value;

        if (!username || !token) {
            alert('Please enter both username and token');
            return;
        }

        const response = await fetch('https://chat.davidnet.net/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, token }) // Sending correct payload
        });

        console.log(response); // Debugging log to check the response status

        const data = await response.json();
        if (data.message === 'Login successful') {
            alert('Logged in successfully');
        } else {
            alert('Error: ' + data.error);
        }
    });
});
