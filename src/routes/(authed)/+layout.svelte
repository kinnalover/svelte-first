<slot/>
<script>
    import { session } from "$lib/api/auth";
    session.subscribe(value => {
        console.log('Session changed in (todo):', value);
    });
</script>