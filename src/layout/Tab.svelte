<script>
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { expoOut } from 'svelte/easing'; // Changed to expoOut for a different easing effect

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
	<div
		class="tab-content"
		in:fly={{ delay: 0, duration: 1000, x: 100, y: 0, opacity: 1, easing: expoOut }}
		out:fly={{ delay: 0, duration: 1000, x: -100, y: 0, opacity: 0, easing: expoOut }}
	>
		<slot />
	</div>
{/if}

<style>
	.tab-content {
		position: absolute;
		width: 100%;
		height: 100%;
	}
</style>
