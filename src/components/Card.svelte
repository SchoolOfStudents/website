<script>
	import { Badge, Button, Card, Group, Image, Text, Center, Space, Title } from '@svelteuidev/core';

	import logo from '$img/favicon.png';
</script>

<Card>
	<Card.Section first>
		<Image src={logo} height={160} alt="Introduction to Statistics" style="width: 100%;" />
	</Card.Section>

	<div class="card-title">
		<h2>Introduction to Statistics</h2>
		<p>Last update 2023.04.12</p>
	</div>

	<Space h="md" />

	<Group style="gap: 5px;">
		<Badge cor="blue" variant="light">13 Chapters</Badge>
		<Badge color="orange" variant="light">2023</Badge>
		<Badge color="red" variant="light">200 Flashcards</Badge>
		<Badge color="green" variant="light">EHTZ</Badge>
		<Badge color="pink" variant="light">193-248-233-1</Badge>
		<Badge color="yellow" variant="light">AI Assistant</Badge>
	</Group>

	<Space h="md" />
	<Space h="md" />

	<div class="card-button">
		<Button variant="gradient" gradient={{ from: 'blue', to: 'teal', deg: 45 }}>Preview</Button>
		<Space w="md" />
		<Button variant="gradient" gradient={{ from: 'teal', to: 'green', deg: 105 }}
			>Buy - 69 Chf</Button
		>
	</div>
</Card>

<style>
	.card-title h2 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 0;
		font-family: 'Segoe UI', 'Segoe UI', 'Segoe UI', 'Segoe UI', 'Segoe UI';
	}

	.card-title p {
		font-size: 0.8rem;
		font-weight: 400;
		margin-top: 0;
		font-family: 'Segoe UI';
	}

	.card-button {
		display: flex;
		justify-content: center;
		font-family: 'Segoe UI';
	}
</style>
