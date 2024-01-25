<script>
	export let edit = false;
	export let center = false;
</script>

<div class="m-0">
	{#if edit}
		<div
			class="p-1.5 rounded-md hover:bg-neutral cursor-pointer"
			class:flex={center}
			class:items-center={center}
			class:justify-center={center}
		>
			<slot />
		</div>
	{:else}
		<div
			class="p-1.5"
			class:flex={center}
			class:items-center={center}
			class:justify-center={center}
		>
			<slot />
		</div>
	{/if}
</div>

<style>
</style>
