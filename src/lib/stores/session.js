import { writable } from "svelte/store";
export const session = writable(null);
export function setSession(token) {
    session.set(token);
    if (typeof window !== 'undefined'){
        localStorage.setItem('token', token);
    }
    
}

export function clearSession(){
    session.set(null);
    if (typeof window !== 'undefined'){
    localStorage.removeItem('token');}
}
export function loadSession(){
    let token ='';
    if (typeof window !== 'undefined'){
        token = localStorage.getItem('token');
    }
    if (token) {
        session.set(token);
    } else {
        session.set(null);
    }
}