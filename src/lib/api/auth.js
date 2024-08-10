const API_URL = 'http:localhost:5000';

export async function login( username, password) {
    console.log("username: ",username, password);
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({
            username, password
        })
    });
    if (!response.ok){
        
        throw new Error('Invalid credentials');
    }
    const data = await response.json();
    return data.access_token;
}

export async function logout(token) {
    console.log('function of logout')
    const response = await fetch(`${API_URL}/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

    });
    if (!response.ok){
        throw new Error('Failed to logout in async function logout')
    }
}