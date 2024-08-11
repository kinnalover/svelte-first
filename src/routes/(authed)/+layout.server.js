// Path: /routes/(authed)/+layout.server.js
import { loadSession } from '$lib/api/auth';
import { redirect } from '@sveltejs/kit';
export async function load({ cookies }) {
    console.log("layout cookies:", cookies.getAll())
    const session = await loadSession(cookies);
    
    if (!session) {
        console.log("no session redirecting to /login")
        redirect(303, '/login');
    }
    else {
        console.log("+layout.server.js session exists")
    }

    return { session };
}
