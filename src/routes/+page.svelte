<script>
	import Main from '$layout/Main.svelte';
	import Tabs from '$layout/Tabs.svelte';
	import Tab from '$layout/Tab.svelte';
	import Blog from '$lib/Blog.svelte';
	import Update from '$lib/Update.svelte';

	import MainNavbar from '$lib/MainNavbar.svelte';
	import OnThisPage from '$lib/OnThisPage.svelte';

	import Title from '$ui/Title.svelte';
	import Text from '$ui/Text.svelte';
	import Equation from '$ui/Equation.svelte';

	let sections = [
		{ text: 'Create database', ref: null },
		{ text: 'Create collection', ref: null },
		{ text: 'Create documents', ref: null },
		{ text: 'List documents', ref: null }
	];

	let equation = 'f(x) = \\int_{-\\infty}^\\infty \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}';
	let equation2 = '= \\displaystyle \\prod_{j=0}^{\\infty}\\frac{1}{(1-q^{5j+2})(1-q^{5j+3})},';
</script>

<main>
	<Main>
		<MainNavbar slot="navbar-left" />

		<script>
		</script>

		<Tabs defaultTab="Home">
			<Tab title="Home" icon="ic:baseline-home">
				<div>
					<Title>School of students</Title>

					<Text text="What can be done:" />
					<Text text="- bold text, for example, *bold text*" />
					<Text text="- italic text, for example, _italic text_" />
					<Text text="- strikethrough text, for example, ~strikethrough text~" />
					<Text text="- mark text, for example, !mark text!" />

					<Equation math={equation} displayMode />
					<Equation math={equation2} displayMode />

					{#each sections as section}
						<section
							bind:this={section.ref}
							style="height: 500px; border: 1px solid #ccc; margin-top: 10px;"
						>
							<h2>{section.text}</h2>
						</section>
					{/each}
				</div>
			</Tab>
			<Tab title="Blog" icon="ic:outline-comment">
				<Title>Blog</Title>
				<Blog />
			</Tab>
			<Tab title="Updates" icon="ic:round-update">
				<Title>Updates</Title>
				<Update />
			</Tab>
			<Tab title="About" icon="ic:outline-info">
				<Title>About</Title>
				<Text text="This is a test page" />
			</Tab>
		</Tabs>

		<OnThisPage slot="navbar-right" {sections} />
	</Main>
</main>
