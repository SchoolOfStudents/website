<script>
	import Main from '$layout/Main.svelte';
	import Sidebar from '$layout/Sidebar.svelte';
	import Tabs from '$/tabs';

	import Blog from '$layout/Blog.svelte';
	import Updates from '$layout/Updates.svelte';

	import Markdown from '$/markdown.svelte';
	import HomeMarkdown from './home.md?raw';
	import AboutMarkdown from './about.md?raw';
</script>

<Main>
	<Sidebar slot="sidebar" />

	<div slot="content">
		<Tabs defaultTab="Home">
			<Tabs.Tab title="Home" icon="ic:baseline-home">
				<div class="flex items-center justify-center">
					<Markdown data={HomeMarkdown} />
				</div>
			</Tabs.Tab>
			<Tabs.Tab title="Blog" icon="ic:outline-comment">
				<Blog />
			</Tabs.Tab>
			<Tabs.Tab title="Updates" icon="ic:round-update">
				<Updates />
			</Tabs.Tab>
			<Tabs.Tab title="About" icon="ic:outline-info">
				<div class="flex items-center justify-center">
					<Markdown data={AboutMarkdown} />
				</div>
			</Tabs.Tab>
		</Tabs>
	</div>
</Main>
