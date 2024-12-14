import Elements from '../Elements.js';

window.addEventListener("DOMContentLoaded", () => {
    Elements.signupbtn.addEventListener('click', async function () {
        const username = Elements.usernamesp.value; // Changed 'Username' to 'username' (lowercase)

        if (!username) {
            Elements.signuperr.textContent = "Invalid username"
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
            Elements.signuperr.textContent = `Scan the QR code with an authencator!
            
            After you can go Back and login!
            `
        } else {
            Elements.signuperr.textContent = data.error;
        }
    });
});

window.addEventListener("DOMContentLoaded", () => {
    Elements.signinbtn.addEventListener('click', async function () {
        const username = Elements.username.value; // Changed to lowercase 'username'
        const token = Elements.authcode.value;

        if (!username || !token) {
            Elements.autherr.textContent = "Invalid credentials!"
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
            Elements.autherr.style.color = "white";
            Elements.autherr.textContent = "Logged in succesfully!"
        } else {
            Elements.autherr.textContent = data.error;
        }
    });
});
