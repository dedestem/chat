import Elements from '../Elements.js';

window.addEventListener("DOMContentLoaded", () => {
    // Signup functionality
    Elements.signupbtn.addEventListener('click', async function () {
        const username = Elements.usernamesp.value;

        if (!username) {
            Elements.signuperr.textContent = "Invalid username";
            return;
        }

        const response = await fetch('https://chat.davidnet.net/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username }) //! NEEDS TO BE LOWERCASE username ELSE Nodejs = ):
        });

        const data = await response.json();
        if (data.qrCodeUrl) {
            Elements.authqr.src = data.qrCodeUrl;
            Elements.authqr.style.display = "block";
            Elements.signupbtn.style.display = "none";
            Elements.signuperr.style.color = "white";
            Elements.signuperr.textContent = "Scan the QR code with an authenticator! After you can go back and login!";
        } else {
            Elements.signuperr.textContent = data.error;
        }
    });

    // Signin functionality
    Elements.signinbtn.addEventListener('click', async function () {
        const username = Elements.username.value; // Changed to lowercase 'username'
        const token = Elements.authcode.value;

        if (!username || !token) {
            Elements.autherr.textContent = "Invalid credentials!";
            return;
        }

        const response = await fetch('https://chat.davidnet.net/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, token }) // Sending correct payload
        });

        const data = await response.json();
        if (data.message === 'Login successful') {
            // Store the token and expiration time in localStorage
            localStorage.setItem('authToken', data.token);
            const expiryTime = Date.now() + 3600000; // Set expiry time (1 hour)
            localStorage.setItem('authTokenExpiry', expiryTime);
            localStorage.setItem('username', username);

            Elements.autherr.style.color = "white";
            Elements.autherr.textContent = "Logged in successfully!";

            setTimeout(() => {
                location.reload();
            }, 1000);
        } else {
            Elements.autherr.textContent = data.error;
        }
    });
});
