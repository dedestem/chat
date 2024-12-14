const { invoke } = window.__TAURI__.core;
import Elements from './Elements.js';

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        Elements.start.style.display = "none";
        Elements.startauth.style.display = "flex";
    }, 1000);

    
    //QRCode.toCanvas(Elements.authqr, "https://google.com", function (error) {
    //    if (error) console.error(error);
    //    else console.log('QR code generated!');
    //});
    //Elements.authqr.style.display = "block";
});
