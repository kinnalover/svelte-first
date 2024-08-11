<!-- Path: /routes/+layout.svelte -->
<script>
    import { page, navigating } from '$app/stores';
    import { session } from '$lib/api/auth';
    

    session.subscribe(value => {
        console.log('Session changed:', value);
    });
</script>

<nav>
    <a href="/" aria-current={$page.url.pathname === '/'}>Home</a>
    <a href="/about" aria-current={$page.url.pathname === '/about'}>About</a>
    <a href="/blog" aria-current={$page.url.pathname === '/blog'}>Blog</a>
    <a href="/todo" aria-current={$page.url.pathname === '/todo'}>ToDo</a>
    <a href="/app" aria-current={$page.url.pathname === '/app'}>App</a>
    {#if $session.isAuthenticated}
        <!-- Use a POST request to trigger the logout -->
        <form action="/logout" method="POST" style="display:inline;">
            <button type="submit">Logout</button>
        </form>
    {/if}
</nav>

<slot></slot>
