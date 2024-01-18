<script>
	import Main from '$layout/Main.svelte';
	import SideBar from '$layout/Sidebar.svelte';

	import Card from '$/card';
	import Icon from '@iconify/svelte';
</script>

<Main>
	<SideBar slot="sidebar" />

	<div slot="content"></div>
</Main>
