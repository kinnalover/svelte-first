import { redirect } from '@sveltejs/kit';
import { clearSession } from '$lib/api/auth';
export const actions = {
    async default({ cookies }) {
        // Clear the session cookie
        cookies.delete('session_id', { path: '/' });
        
        // Redirect to the login page or home page after logout
        console.log("redirecting to login");
        clearSession()
        redirect(303, '/login')
        console.log("after redirecting to login");
        return {"success": "ok"}
    }
};
