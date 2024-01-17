<script>
	import Main from '$layout/Main.svelte';
	import Sidebar from '$layout/Sidebar.svelte';
	import Tabs from '$/tabs';

	import Blog from '$layout/Blog.svelte';
	import Updates from '$layout/Updates.svelte';
	import About from '../layout/About.svelte';
	import Home from '../layout/Home.svelte';
</script>

<Main>
	<Sidebar slot="sidebar" />

	<div slot="content">
		<Tabs defaultTab="Home">
			<Tabs.Tab title="Home" icon="ic:baseline-home">
				<Home />
			</Tabs.Tab>
			<Tabs.Tab title="Blog" icon="ic:outline-comment">
				<Blog />
			</Tabs.Tab>
			<Tabs.Tab title="Updates" icon="ic:round-update">
				<Updates />
			</Tabs.Tab>
			<Tabs.Tab title="About" icon="ic:outline-info">
				<About />
			</Tabs.Tab>
		</Tabs>
	</div>
</Main>
