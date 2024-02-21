<script>
	import Main from '$layout/Main.svelte';
	import SideBar from '$layout/Sidebar.svelte';

	import Card from '$/card';
	import Icon from '@iconify/svelte';
	import example from '$img/example.png';

	/* Create 10 course dynamically */
	let courses = Array.from({ length: 10 }, (_, i) => {
		return {
			title: `Course ${i + 1}`,
			description: 'This is a course description',
			button: 'Enroll',
			src: example,
			alt: 'Example image'
		};
	});
</script>

<Main>
	<SideBar slot="sidebar" />

	<div slot="content">
		<h1 class="text-4xl font-bold">Search</h1>
		<p class="">List of all published courses</p>
		<br />

		<div class="relative">
			<input
				type="text"
				placeholder="Search for school, course, teacher..."
				class="input input-bordered w-full pl-10"
			/>
			<span class="absolute inset-y-0 left-0 pr-3 flex items-center justify-center w-14">
				<Icon icon="mdi:magnify" class="w-6 h-6 flex" />
			</span>
		</div>

		<br />

		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			{#each courses as course}
				<Card {...course} />
			{/each}
		</div>

		<br />

		<div class="join w-full justify-center">
			<button class="join-item btn">1</button>
			<button class="join-item btn">2</button>
			<button class="join-item btn btn-disabled">...</button>
			<button class="join-item btn">99</button>
			<button class="join-item btn">100</button>
		</div>
	</div>
</Main>
