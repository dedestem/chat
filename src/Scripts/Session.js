async function CheckSessionValidity() {
    const username = localStorage.getItem('username');
    const authToken = localStorage.getItem('authToken');

    if (!username || !authToken) {
        console.log('Error: Missing username or auth token');
        return false;
    }

    try {
        const response = await fetch('https://chat.davidnet.net/check-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, authToken }),
        });

        const data = await response.json();

        if (response.ok && data.valid) {
            console.log('Session is valid');
            return true;
        } else {
            console.log('Session is invalid:', data.error || 'Unknown error');
            return false;
        }
    } catch (error) {
        console.error('Error checking session:', error);
        return false;
    }
}

export default CheckSessionValidity;
