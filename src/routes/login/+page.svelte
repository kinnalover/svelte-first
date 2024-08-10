<script>
  import { goto } from '$app/navigation';

  let username = '';
  let password = '';
  let error = '';
  let api_url = 'http://localhost:5000';
  async function handleLogin() {
      error = '';

      
      try {
          const response = await fetch(`${api_url}/login`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Request-Headers': 'content-type',
              },
              body: JSON.stringify({username,password}), // URL encoded body
              mode: 'cors',
          });

          if (!response.ok) {
              throw new Error('Login failed');
          }

          const data = await response.json();
          // Store the access token (usually in session storage or cookies)
          const accessToken = data.access_token;
          document.cookie = `token=${accessToken}; path=/`;

          // Navigate to a protected route
          goto('/');
      } catch (e) {
          error = 'Login failed. Please check your username and password.';
      }
  }
</script>

<main>
  <h1>Login</h1>
  {#if error}
      <p style="color: red;">{error}</p>
  {/if}
  <form on:submit|preventDefault={handleLogin}>
      <div>
          <label for="username">Username:</label>
          <input type="text" id="username" bind:value={username} required />
      </div>
      <div>
          <label for="password">Password:</label>
          <input type="password" id="password" bind:value={password} required />
      </div>
      <button type="submit">Login</button>
  </form>
</main>