import Elements from '../Elements.js';
import CheckSessionValidity from '../Session.js';

async function newChat(otherUsername) {
    const username = localStorage.getItem('username');
    const authToken = localStorage.getItem('authToken');

    if (!username || !authToken || !otherUsername) {
        location.reload();
    }

    const isSessionValid = await CheckSessionValidity();
    if (!isSessionValid) {
        location.reload();
    }

    try {
        const response = await fetch('https://chat.davidnet.net/new-chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, authToken, otherUsername }),
        });

        const data = await response.json();

        if (response.ok) {
            return { success: true, msg: 'Chat created successfully' };
        } else {
            return { success: false, msg: data.error || 'Unknown error' };
        }
    } catch (error) {
        console.error('Error: ', error);
        return { success: false, msg: 'Something wrent wrong!' };
    }
}

async function getChats() {
    const username = localStorage.getItem('username');
    const authToken = localStorage.getItem('authToken');

    if (!username || !authToken) {
        location.reload();
    }

    const isSessionValid = await CheckSessionValidity();
    if (!isSessionValid) {
        location.reload();
    }

    try {
        const response = await fetch('https://chat.davidnet.net/get-chats', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, authToken }),
        });

        const data = await response.json();

        if (response.ok) {
            return data.chats;  // List of chats
        } else {
            console.log('Error:', data.error || 'Unknown error');
            return [];
        }
    } catch (error) {
        console.error('Error fetching chats:', error);
        return [];
    }
}

async function reloadchats(params) {
    const username = localStorage.getItem('username');
    const authToken = localStorage.getItem('authToken');

    if (!username || !authToken) {
        return;
    }

    const isSessionValid = await CheckSessionValidity();
    if (!isSessionValid) {
        return;
    }

    const chats = await getChats();
    console.log(chats);
    chats.forEach(function(item) {
        console.debug(item);
        var otherperson = "";

        if (item.username1 == username) {
            otherperson = item.username2;
        } else {
            otherperson = item.username1;
        }
        console.log(otherperson);
        
        const button = document.createElement('button');
        button.innerText = otherperson;
        Elements.nav.appendChild(button);
        button.addEventListener('click', async function() {
            console.log(otherperson);
        });
    });
}

window.addEventListener("DOMContentLoaded", () => {
    Elements.newchatbtn.addEventListener('click', async function() {
        const status = newChat(Elements.newchatusername.value);
        const data = await status;
        console.log(data.success);
        console.log(data.msg);
        if (data.success) {
            Elements.newchatstatus.style.color = "white";
            Elements.newchatbtn.style.display = "none";
            setTimeout(() => {
                window.reload();
            }, 2000);
        }
        Elements.newchatstatus.innerText = data.msg;
    });
    reloadchats();
});