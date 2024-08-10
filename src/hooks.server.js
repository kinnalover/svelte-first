import { loadSession } from "$lib/stores/session";
export async function handle({event, resolve}){
    loadSession();
    return resolve(event);
}