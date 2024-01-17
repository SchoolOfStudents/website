<script>
	import profile from '$img/favicon.png';
	import Icon from '@iconify/svelte';

	const TABS = [
		{
			title: 'Home',
			icon: 'ic:baseline-home'
		},
		{
			title: 'Blog',
			icon: 'ic:outline-comment'
		},
		{
			title: 'Updates',
			icon: 'ic:round-update'
		},
		{
			title: 'About',
			icon: 'ic:outline-info'
		}
	];
</script>

<div class="join inline-flex items-center gap-3">
	<div class="avatar">
		<div class="w-12 rounded">
			<img src={profile} />
		</div>
	</div>
	<div class="flex flex-col">
		<div class="text-2xl font-bold text-primary">School Of Students</div>
		<div class="text-sm text-red-400">Currently in Beta</div>
	</div>
</div>

<div class="h-8" />

{#each TABS as tab (tab.title)}
	<li>
		<a class="text-xl my-2">
			{#if tab.icon}<Icon icon={tab.icon} width={25} height={25} class="mr-4" />{/if}
			{tab.title}
		</a>
	</li>
{/each}

<div class="absolute inset-x-0 bottom-0 inline-flex items-center gap-3 m-4">
	<div class="avatar rounded-full ring ring-primary">
		<div class="w-12 rounded">
			<img src={profile} />
		</div>
	</div>
	<div class="flex flex-col">
		<div class="text-xl">Pico Pallino</div>
		<div class="text-sm">pinco@pallino.ch</div>
	</div>
</div>
