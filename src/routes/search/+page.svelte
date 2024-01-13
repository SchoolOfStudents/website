<script>
	import Main from '$layout/Main.svelte';
	import MainNavbar from '$layout/MainNavbar.svelte';

	import { Input, Space, SimpleGrid } from '@svelteuidev/core';
	import { MagnifyingGlass } from 'radix-icons-svelte';

	import Card from '$/Card.svelte';
</script>

<main>
	<Main>
		<MainNavbar slot="navbar-left" />

		<!-- TODO: replace this with a custom made element -->
		<Input
			color="pink "
			icon={MagnifyingGlass}
			placeholder="Search for school, course, teacher..."
			rightSectionWidth={70}
			variant="filled"
		/>

		<Space h="md" />
		<SimpleGrid
			breakpoints={[
				{ maxWidth: 1280, cols: 2, spacing: 'md' },
				{ maxWidth: 980, cols: 2, spacing: 'sm' },
				{ maxWidth: 600, cols: 1, spacing: 'sm' },
				{ maxWidth: 0, cols: 1, spacing: 'sm' }
			]}
			cols={2}
		>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</SimpleGrid>
	</Main>
</main>

<style>
</style>
