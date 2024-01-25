<script>
	import profile from '$img/favicon.png';
	import Icon from '@iconify/svelte';

	import { auth } from '$stores/auth';

	$: username = $auth.username;
	$: avatar = $auth.avatar;
	$: email = $auth.email;
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

	<!-- Tabs here -->
	<li>
		<a class="text-xl my-2" href="/search">
			<Icon icon="ic:round-search" width={25} height={25} class="mr-4" />
			Search
		</a>
	</li>
	<li>
		<a class="text-xl my-2" href="/courses">
			<Icon icon="ic:baseline-list" width={25} height={25} class="mr-4" />
			Couses
		</a>
	</li>
	<li>
		<a class="text-xl my-2" href="/created">
			<Icon icon="ic:outline-playlist-add" width={25} height={25} class="mr-4" />
			Created
		</a>
	</li>

	<!--<div class="divider">Other</div>
<li>
	<a class="text-xl my-2" href="/shop">
		<Icon icon="ic:baseline-shop" width={25} height={25} class="mr-4" />
		Shop
	</a>
</li>
<li>
	<a class="text-xl my-2">
		<Icon icon="la:robot" width={25} height={25} class="mr-4" />
		Chatbot
	</a>
</li>
<li>
	<a class="text-xl my-2">
		<Icon icon="ic:baseline-document-scanner" width={25} height={25} class="mr-4" />
		Document Translator
	</a>
</li>
<li>
	<a class="text-xl my-2">
		<Icon icon="ic:outline-video-library" width={25} height={25} class="mr-4" />
		Video Translator
	</a>
</li>
-->

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
