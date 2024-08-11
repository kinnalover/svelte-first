// Path: /lib/api/auth.js

import { writable } from 'svelte/store';

export const session = writable({
    user_id: null,
    username: null,
    isAuthenticated: false
});
export const login = async (username, password) => {
    const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        const data = await response.json();
        console.log("data:", data);

        return data;
    } else {
        throw new Error('Login failed');
    }
};

export const logout = async () => {
    const response = await fetch('http://localhost:5000/logout', {
        method: 'POST'
    });

    if (response.ok) {
        return true;
    } else {
        throw new Error('Logout failed');
    }
};

export const getSession = async (cookies) => {
    console.log("getSession funciton executed: ", cookies.get('session_id'));
    
    const response = await fetch('http://localhost:5000/session', {
        headers: { 'Cookie': cookies.get('session_id')}
    });

    if (response.ok) {
        return await response.json();
    } else {
        return null;
    }
};
export const loadSession = async (cookies) => {
    console.log('LoadSession function: cookies: ', cookies.getAll())
    const response = await fetch('http://localhost:5000/session', {
        headers: { 'Cookie': cookies.get('session_id') }
    });

    if (response.ok) {
        const data = await response.json();
        session.set({
            user_id: data.session,
            username: data.username,
            isAuthenticated: true
        });

        session.subscribe((value) => {
            console.log("load session ok, session: ", value);// This will log the actual data inside the session store
        });
        
        
        return data;
    } else {
        console.log("the is no session data, in ");
        
        return null;
    }
};
export function clearSession() {
    session.set({
        user_id: null,
        username: null,
        isAuthenticated: false
    });
    console.log("Session cleared.");
}