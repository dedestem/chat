const { invoke } = window.__TAURI__.core;
import Elements from './Elements.js';

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        Elements.start.style.display = "none";
        Elements.startauth.style.display = "flex";
    }, 2000);
});
