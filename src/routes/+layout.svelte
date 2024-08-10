<script>
    import { page, navigating, updated } from '$app/stores';
    import {session} from '$lib/stores/session';
    export let data;
</script>

<nav>
    <a href="/" aria-current={$page.url.pathname === '/'}>Home</a>
    <a href="/blog" aria-current={$page.url.pathname === '/blog'}>Blog</a>
    <a href="/todo" aria-current={$page.url.pathname === '/todo'}>ToDo</a>
    <a href="/app" aria-current={$page.url.pathname === '/app'}>App</a>
    {#if $navigating}
        navigating to {$navigating.to.url.pathname}
    {/if}

    {#if isLoggedIn}
        <form on:submit|preventDefault={handleLogout}>
            <button type="submit">
            Logout
            </button>
        </form>
    {/if}
</nav>
<slot></slot>