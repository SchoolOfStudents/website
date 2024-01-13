<script>
	import { Text, Timeline } from '@svelteuidev/core';
	import { Plus } from 'radix-icons-svelte';

	export let date;
</script>

<Timeline.Item lineVariant="dashed" bullet={Plus} title={date}>
	<Text color="DarkGray" size="sm">
		<slot />
	</Text>
</Timeline.Item>
