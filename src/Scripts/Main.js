const { invoke } = window.__TAURI__.core;
import Elements from './Elements.js';

window.addEventListener("DOMContentLoaded", () => {
    Elements.start.style.display = "none";

    //QRCode.toCanvas(Elements.authqr, "https://google.com", function (error) {
    //    if (error) console.error(error);
    //    else console.log('QR code generated!');
    //});
});
