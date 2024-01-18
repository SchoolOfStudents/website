<script>
	import '../app.css';
	import { auth } from '$stores/auth';
	import { onMount } from 'svelte';

	onMount(async () => {
		await auth.update();
	});
</script>

<slot />
