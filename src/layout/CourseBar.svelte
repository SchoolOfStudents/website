<script>
	import profile from '$img/favicon.png';
	import Icon from '@iconify/svelte';

	import { auth } from '$stores/auth';

	$: username = $auth.username;
	$: avatar = $auth.avatar;
	$: email = $auth.email;

	export let sections = [];
</script>

<div>
	<a href="/">
		<div class="join inline-flex items-center gap-3">
			<div class="avatar">
				<div class="w-12 rounded">
					<img src={profile} alt="logo" />
				</div>
			</div>
			<div class="flex flex-col">
				<div class="text-2xl font-bold text-white">School Of Students</div>
				<div class="text-sm text-red-400">Currently in Beta</div>
			</div>
		</div>
	</a>

	<div class="h-8" />

	{#each sections as section}
		<li>
			<a class="text-xl my-2" href="/search"> {section.title} </a>
		</li>
	{/each}

	<div class="absolute inset-x-0 bottom-0 inline-flex items-center gap-5 m-4">
		{#if typeof username === 'object'}
			<button class="w-full" onclick="modal_login.showModal()">
				<div role="button" class="btn btn-primary w-full">Login</div>
			</button>
			<!-- Modal Content -->
			<dialog id="modal_login" class="modal">
				<div class="modal-box flex items-center justify-center flex-col gap-5">
					<p class="text-2xl font-bold">Login</p>
					<button class="btn btn-neutral" on:click={auth.loginWithGoogle}>
						<Icon icon="flat-color-icons:google" width={25} height={25} class="mr-4" />
						<p class="text-xl">Login with Google</p>
					</button>
				</div>
				<form method="dialog" class="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		{:else}
			<div class="dropdown dropdown-top w-full">
				<div role="button" tabindex="0" class="w-12 rounded inline-flex w-full gap-5">
					<img
						src={avatar}
						class="w-14 avatar rounded-full ring ring-white"
						alt="User Profile Picture"
						aria-hidden="true"
					/>

					<div class="flex flex-col">
						<div class="text-xl">{username}</div>
						<div class="text-sm">{email}</div>
					</div>
				</div>

				<ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
					<li>
						<button on:click={auth.logout}>Logout</button>
					</li>
				</ul>
			</div>
		{/if}
	</div>
</div>
