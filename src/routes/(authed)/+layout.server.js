import { loadSession } from "$lib/stores/session";
import {redirect} from '@sveltejs/kit';

export async function load({cookies}){
    loadSession();
    const token = cookies.get('token');
    if (!token) {
        throw redirect(302, '/login');
    }
    return {token};
}