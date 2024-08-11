import { redirect } from "@sveltejs/kit";
import { getSession } from "$lib/api/auth";

export const handle = async ({ event, resolve }) => {
    try {
        const session = await getSession(event.cookies);
        console.log("hooks's session", session);
        console.log('event.url.pathname', event.url.pathname);
        
        if (session) {
            console.log("hooks's session is trued", session);
            event.locals.user = session.username;
            event.locals.session = session.session;
        }

        if (event.url.pathname.startsWith('/(authed)') && !session) {
            console.log(event.url.pathname, ": pathname doesn't start with authed or not session", session);
            
            throw redirect(302, '/login');
        }

        return resolve(event);
    } catch (error) {
        console.error('Error in handle hook:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
};
