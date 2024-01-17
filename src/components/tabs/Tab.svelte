<script>
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';

	export let title;
	export let icon;

	const { activeTab, tabs } = getContext('tabs');

	$: if (title) {
		tabs.update((n) => {
			if (!n.find((t) => t.title === title)) {
				n.push({ title, icon });
			}
			return n;
		});
	}
</script>

{#if $activeTab === title}
	<div in:fly={{ delay: 0, duration: 1000, x: 100, y: 0, opacity: 1, easing: expoOut }}>
		<slot />
	</div>
{/if}
