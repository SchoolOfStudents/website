<script>
	import { Text, Timeline } from '@svelteuidev/core';
	import { Person } from 'radix-icons-svelte';

	export let date;
</script>

<Timeline.Item lineVariant="dashed" bullet={Person} title={date}>
	<Text color="DarkGray" size="sm">
		<slot />
	</Text>
</Timeline.Item>
