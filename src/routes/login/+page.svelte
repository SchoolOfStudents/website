<script>
	import { auth } from '$stores/auth';

	$: username = $auth.username;
	$: avatar = $auth.avatar;

	console.log(auth);
</script>

{#if typeof username !== 'object'}
	<p>Welcome, {username}!</p>
	<img src={avatar} alt="avatar" />
	<button on:click={auth.logout}>Logout</button>
{:else}
	<button on:click={auth.loginWithGitHub}>Login with GitHub</button>
{/if}
