<script>
	import { Client, Account } from 'appwrite';
	import { onMount } from 'svelte';

	const client = new Client();
	client.setEndpoint('https://cloud.appwrite.io/v1').setProject('659ee2a2da7161b36a37');

	const account = new Account(client);

	let isLoggedIn = false;
	let userName = '';

	onMount(async () => {
		try {
			const response = await account.get();
			isLoggedIn = true;
			console.log(response);
			userName = response.name;
		} catch (error) {
			console.log('Not logged in');
		}
	});

	function loginWithGitHub() {
		account
			.createOAuth2Session('github', 'http://localhost:5173/login', 'http://localhost:5173/login')
			.catch((error) => {
				console.error('OAuth login failed:', error);
			});
	}

	async function logout() {
		try {
			await account.deleteSession('current');
			isLoggedIn = false;
			userName = '';
		} catch (error) {
			console.error('Logout failed:', error);
		}
	}
</script>

{#if isLoggedIn}
	<p>Welcome, {userName}!</p>
	<button on:click={logout}>Logout</button>
{:else}
	<button on:click={loginWithGitHub}>Login with GitHub</button>
{/if}
