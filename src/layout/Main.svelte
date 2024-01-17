<script>
	import profile from '$img/favicon.png';
</script>

<div class="drawer lg:drawer-open flex flex-col lg:grid">
	<div class="w-full navbar bg-base-300 lg:hidden flex-1">
		<div class="join flex-1 inline-flex items-center gap-3">
			<div class="avatar">
				<div class="w-12 rounded">
					<img src={profile} alt="Logo" />
				</div>
			</div>
			<div class="flex flex-col">
				<div class="text-2xl font-bold text-primary">School Of Students</div>
				<div class="text-sm text-red-400">Currently in Beta</div>
			</div>
		</div>

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
	</div>

	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

	<div class="drawer-content flex flex-col">
		<!-- Page content here -->
		<div class="p-3 lg:p-10" style="max-width: 1200px;">
			<slot name="content" />
		</div>
	</div>

	<div class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
			<!-- Sidebar content here -->

			<slot name="sidebar" />
		</ul>
	</div>
</div>
