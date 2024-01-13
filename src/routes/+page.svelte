<script>
	import Main from '$layout/Main.svelte';
	import MainNavbar from '$layout/MainNavbar.svelte';
	// import OnThisPage from '$layout/OnThisPage.svelte';

	import Blog from '$lib/Blog.svelte';
	import Update from '$lib/Update.svelte';

	import UI from '$/ui';
	import Tabs from '$/tabs';
</script>

<main>
	<Main>
		<MainNavbar slot="navbar-left" />

		<Tabs defaultTab="Home">
			<Tabs.Tab title="Home" icon="ic:baseline-home">
				<UI.Title>School of Students</UI.Title>
				<UI.Text>This is a</UI.Text>
			</Tabs.Tab>
			<Tabs.Tab title="Blog" icon="ic:outline-comment">
				<UI.Title>Blog</UI.Title>
				<Blog />
			</Tabs.Tab>
			<Tabs.Tab title="Updates" icon="ic:round-update">
				<UI.Title>Updates</UI.Title>
				<Update />
			</Tabs.Tab>
			<Tabs.Tab title="About" icon="ic:outline-info">
				<UI.Title>About</UI.Title>
				<UI.Text>TODO: Fill this</UI.Text>
			</Tabs.Tab>
		</Tabs>
	</Main>
</main>
