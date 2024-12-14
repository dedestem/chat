const { invoke } = window.__TAURI__.core;
import Elements from './Elements.js';
import CheckSessionValidity from './Session.js';

window.addEventListener("DOMContentLoaded", () => {
    const isOnline = navigator.onLine;

    if (isOnline) {
        setTimeout(async () => {  // Make the callback async to use await
            Elements.start.style.display = "none";

            // Await the result of CheckSessionValidity
            const isSessionValid = await CheckSessionValidity();
            if (isSessionValid) {
                console.log('Session is valid');
            } else {
                Elements.startauth.style.display = "flex";
            }
        }, 2000);
    } else {
        Elements.loaderr.textContent = "Chats requires an internet connection to function!";
        setTimeout(() => {
            location.reload();
        }, 5000);
    }
});
