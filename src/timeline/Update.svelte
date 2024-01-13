<script>
	import { Text, Timeline } from '@svelteuidev/core';
	import { Update } from 'radix-icons-svelte';

	export let date;
</script>

<Timeline.Item lineVariant="dashed" bullet={Update} title={date}>
	<Text color="DarkGray" size="sm">
		<slot />
	</Text>
</Timeline.Item>
