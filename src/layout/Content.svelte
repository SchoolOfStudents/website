<script>
	import { Camera, EnvelopeClosed, Gear } from 'radix-icons-svelte';

	let activeTab = 'gallery';

	function setActiveTab(tab) {
		activeTab = tab;
	}

	$: activeClass = (tabName) => (activeTab === tabName ? 'active' : '');
</script>

<div class="tab-buttons" style="text-align: center;">
	<button class={`tab-button ${activeClass('gallery')}`} on:click={() => setActiveTab('gallery')}>
		<Camera /> Gallery
	</button>
	<button class={`tab-button ${activeClass('messages')}`} on:click={() => setActiveTab('messages')}>
		<EnvelopeClosed /> Messages
	</button>
	<button class={`tab-button ${activeClass('settings')}`} on:click={() => setActiveTab('settings')}>
		<Gear /> Settings
	</button>
</div>

<div class="tab-content">
	{#if activeTab === 'gallery'}
		<slot name="gallery" />
	{/if}

	{#if activeTab === 'messages'}
		<slot name="messages" />
	{/if}

	{#if activeTab === 'settings'}
		<slot name="settings" />
	{/if}
</div>

<style>
	.tab-buttons {
		border-bottom: 1px solid #ccc;
		display: inline-flex;
		width: 100%;
		justify-content: start;
		align-items: center;
		gap: 10px;
		margin: -3px;
	}

	.tab-button {
		color: rgb(122, 122, 122);
		background-color: transparent;
		border: none;
		cursor: pointer;
		padding: 10px 20px;
		width: auto;
		font-size: 16px;
		border-bottom: 2px solid transparent; /* Default state with no underline */
		transform: translate(0, 1.5px);
	}

	.tab-button.active {
		border-bottom: 2px solid rgb(255, 255, 255); /* Underline for active tab */
		color: rgb(255, 255, 255);
	}

	.tab-button:focus {
		outline: none;
	}

	.tab-content {
		margin-top: 20px;
	}
</style>
