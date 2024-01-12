<script>
	import Main from '$layout/Main.svelte';
	import MainNavbar from '$lib/MainNavbar.svelte';

	import Title from '$ui/Title.svelte';
	import Text from '$ui/Text.svelte';
</script>

<main>
	<Main>
		<MainNavbar slot="navbar-left" />

		<div>
			<Title>List of created couses</Title>
		</div>
	</Main>
</main>
