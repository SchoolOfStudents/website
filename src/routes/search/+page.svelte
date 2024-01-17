<script>
	import Main from '$layout/Main.svelte';
	import SideBar from '$layout/Sidebar.svelte';

	import Card from '$/card';
	import Icon from '@iconify/svelte';
</script>

<Main>
	<SideBar slot="sidebar" />

	<div slot="content">
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
		<div class="h-4" />
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
		<div class="h-4" />
		<div class="join w-full justify-center">
			<button class="join-item btn">1</button>
			<button class="join-item btn">2</button>
			<button class="join-item btn btn-disabled">...</button>
			<button class="join-item btn">99</button>
			<button class="join-item btn">100</button>
		</div>
	</div>
</Main>
