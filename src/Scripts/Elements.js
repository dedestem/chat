const getElementById = (id) => {
    return document.getElementById(id);
};

const Elements = {
    start: getElementById('start'),


    startauth: getElementById('startauth'),
    startsignin: getElementById('startsignin'),
    startsignup: getElementById('startsignup'),


    auth: getElementById('authentication'),
    authqr: getElementById('username'),
    usernamesp: getElementById('authcode'),
    authcodesp: getElementById('signin'),
    autherr: getElementById('autherr'),
    backtostartauthfromsignin: getElementById('backtostartauthfromsignin'),

    signup: getElementById('signup'),
    authqr: getElementById('authqr'),
    usernamesp: getElementById('usernamesp'),
    authcodesp: getElementById('authcodesp'),
    signupbtn: getElementById('signup-btn'),
    signuperr: getElementById('signuperr'),
    backtostartauthfromsignup: getElementById('backtostartauthfromsignup'),
};

export default Elements;