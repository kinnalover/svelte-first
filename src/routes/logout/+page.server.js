import { session, clearSession } from '$lib/stores/session';

import { goto } from "$app/navigation";

async function logout(token) {
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

// Wrap the entire code in an async function
export async function handleLogout() {
    try {
        // Check if session is defined before using it
        if (session) {
            // Call the logout function and pass the session object
            await logout(session);
            // Clear the session after successful logout
            clearSession();
        }
    } catch (e) {
        console.error('Failed to logout', e);
    }

    // Redirect the user to the login page
    window.location.href = '/login';
}

// Call the handleLogout function
