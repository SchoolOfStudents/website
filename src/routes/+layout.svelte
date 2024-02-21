<script>
	import '../app.css';
	import { auth } from '$stores/auth';
	import { onMount } from 'svelte';

	onMount(async () => {
		const currentTheme = localStorage.getItem('theme') || 'night';
		document.querySelector('html').setAttribute('data-theme', currentTheme);
		await auth.update();
	});
</script>

<slot />
