<script>
	import Box from './Box.svelte';
	export let title;
</script>

<Box type="Quitz" {title}>
	<p><slot /></p>
</Box>
