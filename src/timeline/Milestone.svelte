<script>
	import { Text, Timeline } from '@svelteuidev/core';
	import { Bookmark } from 'radix-icons-svelte';

	export let date;
</script>

<Timeline.Item lineVariant="dashed" bullet={Bookmark} title={date}>
	<Text color="DarkGray" size="sm">
		<slot />
	</Text>
</Timeline.Item>
