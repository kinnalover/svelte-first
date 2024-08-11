

// Path: /routes/login/+page.server.js
import { login } from '$lib/api/auth';
import { redirect } from '@sveltejs/kit';
import { session } from '$lib/api/auth';
export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');

        
        const token = await login(username, password);
        console.log("token:", token.access_token);
        cookies.set('session_id', token.access_token, { path: '/', maxAge: 60 * 60 * 24 });
        console.log("cookies after setting:", cookies.getAll());
        throw redirect(303, '/');
        
    }
};
