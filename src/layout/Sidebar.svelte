<script>
	import profile from '$img/favicon.png';
	import Icon from '@iconify/svelte';
</script>

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
	<div class="avatar rounded-full ring ring-white">
		<div class="w-12 rounded">
			<img src={profile} />
		</div>
	</div>
	<div class="flex flex-col">
		<div class="text-xl">Pico Pallino</div>
		<div class="text-sm">pinco@pallino.ch</div>
	</div>
</div>
