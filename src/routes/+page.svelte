<script>
	let tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
	let active_tab = 1;
</script>

<div class="drawer lg:drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<!-- Page content here -->

		<div class="tabs">
			{#each tabs as tab, index}
				<a
					class="tab tab-bordered"
					class:tab-active={activeTabIndex == index}
					on:click={() => (activeTabIndex = index)}
				>
					{tab}
				</a>
			{/each}
		</div>
	</div>

	<div class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
			<!-- Sidebar content here -->
			<li><a>Sidebar Item 1</a></li>
			<li><a>Sidebar Item 2</a></li>
		</ul>
	</div>
</div>
