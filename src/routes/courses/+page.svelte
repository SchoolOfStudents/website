<script>
	import Main from '$layout/Main.svelte';
	import MainNavbar from '$layout/MainNavbar.svelte';
	// import OnThisPage from '$layout/OnThisPage.svelte';

	import UI from '$/ui';
</script>

<Main>
	<MainNavbar slot="navbar-left" />

	<UI.Title>List of bought couses</UI.Title>
	<UI.Text>Login to see them</UI.Text>
</Main>
