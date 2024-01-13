<script>
	import Main from '$layout/Main.svelte';
	import MainNavbar from '$layout/MainNavbar.svelte';
	import {
		AppShell,
		Navbar,
		ShellSection,
		SimpleGrid,
		Badge,
		Input,
		Space
	} from '@svelteuidev/core';

	import { MagnifyingGlass } from 'radix-icons-svelte';
</script>

<main>
	<Main>
		<MainNavbar slot="navbar-left" />

		<Input
			icon={MagnifyingGlass}
			placeholder="Search for school, course, teacher..."
			rightSectionWidth={70}
			variant="filled"
			styles={{ rightSection: { pointerEvents: 'none' } }}
			color="gray"
		/>
		<Space h="md" />
	</Main>
</main>
