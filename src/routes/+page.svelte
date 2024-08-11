<script>
    // You might need a script here to handle client-side logic, if required
    import { onMount } from 'svelte';
    import { clearSession } from '$lib/api/auth';
    
    onMount(() => {
        console.log("on Mount clearSession");
        
        // Clear session state in the client-side store
        clearSession();
        
        // Optionally, redirect if not handled server-side
        window.location.href = '/login';
    });
</script>

<p>Logging out...</p>
