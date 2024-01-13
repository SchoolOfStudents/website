<script>
	import { page } from '$app/stores';

	export let path;
</script>

<a href={path} class:active={$page.url.pathname === path}>
	<slot />
</a>

<style>
	a {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
		cursor: pointer;
		text-decoration: none;
		color: #ffffff;
	}

	a:hover {
		background-color: #333333;
		border-radius: 4px;
	}

	.active {
		background-color: #333333;
		border-radius: 4px;
	}
</style>
