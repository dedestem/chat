const getElementById = (id) => {
    return document.getElementById(id);
};

const Elements = {
    start: getElementById('start'),
    loaderr: getElementById('loaderr'),

    startauth: getElementById('startauth'),
    startsignin: getElementById('startsignin'),
    startsignup: getElementById('startsignup'),


    auth: getElementById('authentication'),
    username: getElementById('username'),
    authcode: getElementById('authcode'),
    signinbtn: getElementById('signin'),
    autherr: getElementById('autherr'),
    backtostartauthfromsignin: getElementById('backtostartauthfromsignin'),

    signup: getElementById('signup'),
    authqr: getElementById('authqr'),
    usernamesp: getElementById('usernamesp'),
    signupbtn: getElementById('signup-btn'),
    signuperr: getElementById('signuperr'),
    backtostartauthfromsignup: getElementById('backtostartauthfromsignup'),


    main: getElementById('main'),
    nav: getElementById('nav'),
    messages: getElementById('messages'),
    mymessages: getElementById('mymessages'),
    othermessages: getElementById('othermessages'),
    sendbar: getElementById('sendbar'),
    sendinput: getElementById('sendinput'),
    sendbut: getElementById('sendbut'),
};

export default Elements;