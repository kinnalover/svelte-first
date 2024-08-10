<slot />
<script>
    import { handleLogout } from '../logout/+page.server.js';
</script>

<form on:submit|preventDefault={handleLogout}>
    <button type="submit">
        Logout
    </button>
</form>