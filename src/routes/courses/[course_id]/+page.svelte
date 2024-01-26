<script>
	import Main from '$layout/Main.svelte';
	import CourseBar from '$layout/CourseBar.svelte';
	import Tabs from '$/tabs';

	export let data;
</script>

<Main>
	<CourseBar slot="sidebar" />

	<div slot="content">
		<Tabs defaultTab="Home">
			<Tabs.Tab title="Script" icon="ic:baseline-home">
				<h1>{data.title}</h1>
				<div>{@html data.content}</div>
			</Tabs.Tab>
			<Tabs.Tab title="Flashcards" icon="ic:outline-comment">
				<h1>{data.title}</h1>
				<div>{@html data.content}</div>
			</Tabs.Tab>
			<Tabs.Tab title="Tests" icon="ic:round-update">
				<h1>{data.title}</h1>
				<div>{@html data.content}</div>
			</Tabs.Tab>
			<Tabs.Tab title="Video" icon="ic:outline-info">
				<h1>{data.title}</h1>
				<div>{@html data.content}</div>
			</Tabs.Tab>
		</Tabs>
	</div>
</Main>
