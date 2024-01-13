<script>
	import Main from '$layout/Main.svelte';
	import MainNavbar from '$layout/MainNavbar.svelte';

	import UI from '$/ui';
</script>

<Main>
	<MainNavbar slot="navbar-left" />

	<UI.Title>Settings</UI.Title>
</Main>
