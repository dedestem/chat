const { invoke } = window.__TAURI__.core;
import Elements from './Elements.js';

window.addEventListener("DOMContentLoaded", () => {
    const isOnline = navigator.onLine;

    if (isOnline) {
        setTimeout(() => {
            Elements.start.style.display = "none";
            Elements.startauth.style.display = "flex";
        }, 2000);
    } else {
        Elements.loaderr.textContent = "Chats requires an internet connection to function!"
        setTimeout(() => {
            location.reload();
        }, 10000);
    }
});

