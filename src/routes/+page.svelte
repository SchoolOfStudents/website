<script>
	import Main from '$layout/Main.svelte';
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

		<div>
			<Title>School of students</Title>

			<Text
				text="We believe that only $x^2$ a student can explain to another student any topic in a format
				that is *understandable*, _easy_, and ~clear~. This is a !mark!"
			/>

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

		<OnThisPage slot="navbar-right" {sections} />
	</Main>
</main>
