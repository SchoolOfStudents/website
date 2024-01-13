<script>
	import { Text, Timeline } from '@svelteuidev/core';
	import { Bookmark, Update, Person, Plus } from 'radix-icons-svelte';

	export let date;
	export let type;
</script>

{#if type === 'update'}
	<Timeline.Item lineVariant="dashed" bullet={Update} title={date}>
		<Text color="DarkGray" size="sm">
			<slot />
		</Text>
	</Timeline.Item>
{:else if type === 'person'}
	<Timeline.Item lineVariant="dashed" bullet={Person} title={date}>
		<Text color="DarkGray" size="sm">
			<slot />
		</Text>
	</Timeline.Item>
{:else if type === 'milestone'}
	<Timeline.Item lineVariant="dashed" bullet={Bookmark} title={date}>
		<Text color="DarkGray" size="sm">
			<slot />
		</Text>
	</Timeline.Item>
{:else if type === 'feature'}
	<Timeline.Item lineVariant="dashed" bullet={Plus} title={date}>
		<Text color="DarkGray" size="sm">
			<slot />
		</Text>
	</Timeline.Item>
{/if}
