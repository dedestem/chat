import Elements from './Elements.js';

window.addEventListener("DOMContentLoaded", () => {
    Elements.startsignin.addEventListener('click', function() {
        Elements.startauth.style.display = "none";
        Elements.auth.style.display = "flex";
    });

    Elements.backtostartauthfromsignin.addEventListener('click', function() {
        location.reload();
    });

    Elements.startsignup.addEventListener('click', function() {
        Elements.startauth.style.display = "none";
        Elements.signup.style.display = "flex";
    });

    Elements.backtostartauthfromsignup.addEventListener('click', function() {
        location.reload();
    });

    Elements.backtostartauthfromaddchat.addEventListener('click', function() {
        location.reload();
    });

    Elements.gotoaddchat.addEventListener('click', function() {
        Elements.main.style.display = "none";
        Elements.addchat.style.display = "flex";
    });
});
