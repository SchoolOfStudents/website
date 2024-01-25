<script>
	export let edit = false;
	export let center = false;
</script>

<div class="m-1 p-1">
	{#if edit}
		<div
			class="rounded-md hover:bg-neutral cursor-pointer"
			class:flex={center}
			class:items-center={center}
			class:justify-center={center}
		>
			<slot />
		</div>
	{:else}
		<div class:flex={center} class:items-center={center} class:justify-center={center}>
			<slot />
		</div>
	{/if}
</div>

<style>
</style>
