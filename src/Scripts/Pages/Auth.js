import Elements from './Elements.js';

window.addEventListener("DOMContentLoaded", () => {
    Elements.signupbtn.addEventListener('click', async function () {
        const Username = Elements.usernamesp.value;

        const Response = await fetch('https://chat.davidnet.net/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Username })
        });

        const Data = await Response.json();
        if (Data.qrCodeUrl) {
            Elements.authqr.src = Data.qrCodeUrl;
            Elements.authqr.style.display = "block";
        } else {
            alert('Error: ' + Data.error);
        }
    });
});

window.addEventListener("DOMContentLoaded", () => {
    Elements.signinbtn.addEventListener('click', async function () {
        const Username = Elements.username.value;
        const Token = Elements.authcode.value;

        const Response = await fetch('https://chat.davidnet.net/lgoin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Username, Token })
        });

        const Data = await Response.json();
        if (Data.message === 'Login successful') {
            alert('Logged in successfully');
        } else {
            alert('Error: ' + Data.error);
        }
    });
});