<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { fly } from 'svelte/transition';

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

<div class="tab-buttons">
	{#each $tabs as tab (tab.title)}
		<button class:active={$activeTab === tab.title} on:click={() => activeTab.set(tab.title)}>
			{#if tab.icon}<Icon icon={tab.icon} width={20} height={20} style="margin-right: 10px;" />{/if}
			{tab.title}
		</button>
	{/each}
</div>

<div class="tab-content">
	<slot />
</div>

<style>
	.tab-buttons {
		border-bottom: 1px solid #ccc;
		display: inline-flex;
		width: 100%;
		justify-content: space-evenly;
		align-items: center;
		gap: 10px;
	}

	.tab-buttons button {
		flex: 1 1 0px;
		margin: auto;

		color: rgb(122, 122, 122);
		background-color: transparent;
		border: none;
		cursor: pointer;
		padding: 10px 20px;
		width: auto;
		font-size: 16px;
		border-bottom: 2px solid transparent; /* Default state with no underline */
		transform: translate(0, 1.5px);

		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.tab-buttons button.active {
		border-bottom: 2px solid rgb(255, 255, 255); /* Underline for active tab */
		color: rgb(255, 255, 255);
	}

	.tab-buttons button:focus {
		outline: none;
	}

	.tab-content {
		margin-top: 20px;
		position: relative;
		width: 100%;
	}
</style>
