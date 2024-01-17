<script>
	import Main from '$layout/Main.svelte';
	import Sidebar from '$layout/Sidebar.svelte';
</script>

<Main>
	<Sidebar slot="sidebar" />

	<div slot="content">
		<!-- Page content here -->
		This is the content
	</div>
</Main>
