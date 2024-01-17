<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import Icon from '@iconify/svelte';

	export let defaultTab = '';

	const tabs = writable([]);
	const activeTab = writable('');

	setContext('tabs', { tabs, activeTab });

	$: $activeTab = $activeTab || defaultTab;
	$: tabs.subscribe((t) => {
		if (t.length > 0 && !$activeTab) {
			activeTab.set(t[0].title);
		}
	});
</script>

<div role="tablist" class="tabs tabs-bordered">
	{#each $tabs as tab (tab.title)}
		<button
			class="tab"
			class:tab-active={$activeTab === tab.title}
			on:click={() => activeTab.set(tab.title)}
		>
			{#if tab.icon}<Icon icon={tab.icon} width={20} height={20} style="margin-right: 10px;" />{/if}
			<div class="hidden sm:block">
				{tab.title}
			</div>
		</button>
	{/each}
</div>

<div class="h-8" />

<div class="overflow-x-hidden">
	<slot />
</div>
