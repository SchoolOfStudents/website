<script>
	import Main from '$layout/Main.svelte';
	import Sidebar from '$layout/Sidebar.svelte';
	import Card from '$/card';

	import example from '$img/example.png';

	import { auth } from '$stores/auth';
	import Icon from '@iconify/svelte';

	$: username = $auth.username;
	$: avatar = $auth.avatar;
	$: email = $auth.email;

	console.log(username);

	let courses = [
		{
			title: 'Course 1',
			description: 'This is a course description',
			button: 'Enroll'
		},
		{
			title: 'Course 2',
			description: 'This is a course description',
			button: 'Enroll'
		}
	];
</script>

<Main>
	<Sidebar slot="sidebar" />

	<div slot="content">
		<h1 class="text-4xl font-bold">Courses</h1>
		<p class="">List of bought courses</p>

		<br />

		<div class="relative">
			<input
				type="text"
				placeholder="Search for school, course, teacher..."
				class="input input-bordered w-full pl-10"
			/>
			<span class="absolute inset-y-0 left-0 pr-3 flex items-center justify-center w-14">
				<Icon icon="mdi:magnify" class="w-6 h-6 flex" />
			</span>
		</div>

		<br />

		{#if typeof username === 'object'}
			<div class="flex items-center justify-center">
				<div class="grid w-6/12">
					<!-- Example card -->
					<Card
						title="Example"
						description="This is an example course description"
						button="Open"
						src={example}
						alt="Example image"
						link="/courses/1"
					/>

					<br />

					<!-- Login button -->
					<button class="w-full" onclick="modal_login.showModal()">
						<div role="button" class="btn btn-primary w-full">Login to see more</div>
					</button>
				</div>
			</div>
		{:else}
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				{#each courses as course}
					<Card {...course} />
				{/each}
			</div>
		{/if}
	</div>
</Main>
