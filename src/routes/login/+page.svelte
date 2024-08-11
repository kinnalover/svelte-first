<!-- Path: /routes/login/+page.svelte -->
<script>
    export let data;
</script>

<form method="POST">
    <input type="text" name="username" placeholder="Username" required />
    <input type="password" name="password" placeholder="Password" required />
    <button type="submit">Login</button>
    {#if data.error}
        <p>{data.error}</p>
    {/if}
</form>
  