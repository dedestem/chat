import Elements from './Elements.js';

window.addEventListener("DOMContentLoaded", () => {
    Elements.startsignin.addEventListener('click', function() {
        Elements.startauth.style.display = "none";
        Elements.auth.style.display = "flex";
    });

    Elements.backtostartauthfromsignin.addEventListener('click', function() {
        Elements.auth.style.display = "none";
        Elements.startauth.style.display = "flex";
        location.reload();
    });

    Elements.startsignup.addEventListener('click', function() {
        Elements.startauth.style.display = "none";
        Elements.signup.style.display = "flex";
    });

    Elements.backtostartauthfromsignup.addEventListener('click', function() {
        Elements.signup.style.display = "none";
        Elements.startauth.style.display = "flex";
        location.reload();
    });
});
