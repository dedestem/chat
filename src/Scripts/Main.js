const { invoke } = window.__TAURI__.core;
import Elements from './Elements.js';
import CheckSessionValidity from './Session.js';

window.addEventListener("DOMContentLoaded", () => {
    const isOnline = navigator.onLine;

    // Check if the user is online
    if (isOnline) {
        setTimeout(handleOnlineStatus, 2000);
    } else {
        handleOfflineStatus();
    }
});

// Handle logic when the user is online
async function handleOnlineStatus() {
    try {
        Elements.start.style.display = "none";

        // Wait for session validity check
        const isSessionValid = await CheckSessionValidity();
        
        if (isSessionValid) {
            open();
        } else {
            Elements.startauth.style.display = "flex";
        }
    } catch (error) {
        console.error("Error checking session validity:", error);
    }
}

// Handle logic when the user is offline
function handleOfflineStatus() {
    Elements.loaderr.textContent = "Chats requires an internet connection to function!";
    setTimeout(() => {
        location.reload();
    }, 5000);
}

async function open() {
    Elements.main.style.display = "flex";
}