<script>
	import SideBar from '$layout/Sidebar.svelte';
	import Tabs from '$/tabs';
</script>

<div class="drawer lg:drawer-open flex flex-col lg:grid">
	<div class="w-full navbar bg-base-300 lg:hidden flex-1">
		<div class="flex-none">
			<label for="my-drawer-2" aria-label="open sidebar" class="btn btn-square btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-6 h-6 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path></svg
				>
			</label>
		</div>
		<div class="flex-1 px-2 mx-2">Navbar Title</div>
	</div>

	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

	<div class="drawer-content flex flex-col">
		<!-- Page content here -->

		<Tabs defaultTab="Home">
			<Tabs.Tab title="Home" icon="ic:baseline-home">Content 1</Tabs.Tab>
			<Tabs.Tab title="Blog" icon="ic:outline-comment">Content 1</Tabs.Tab>
			<Tabs.Tab title="Updates" icon="ic:round-update">Content 1</Tabs.Tab>
			<Tabs.Tab title="About" icon="ic:outline-info">Content 1</Tabs.Tab>
		</Tabs>
	</div>

	<div class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
			<!-- Sidebar content here -->
			<SideBar />
		</ul>
	</div>
</div>
