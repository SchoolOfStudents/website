<script>
	import Main from '$layout/Main.svelte';
	import MainNavbar from '$lib/MainNavbar.svelte';
	import OnThisPage from '$lib/OnThisPage.svelte';

	import Title from '$ui/Title.svelte';
	import Text from '$ui/Text.svelte';

	let sections = [
		{ text: 'Create database', ref: null },
		{ text: 'Create collection', ref: null },
		{ text: 'Create documents', ref: null },
		{ text: 'List documents', ref: null }
	];
</script>

<main>
	<Main>
		<MainNavbar slot="navbar-left" />

		<div>
			<Title>School of students</Title>
			<Text>
				We believe that only a student can explain to another student any topic in a format that is
				understandable
			</Text>

			{#each sections as section}
				<section
					bind:this={section.ref}
					style="height: 500px; border: 1px solid #ccc; margin-top: 10px;"
				>
					<h2>{section.text}</h2>
				</section>
			{/each}
		</div>

		<OnThisPage slot="navbar-right" {sections} />
	</Main>
</main>
