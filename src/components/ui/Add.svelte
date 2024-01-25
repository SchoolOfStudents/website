<script>
	import Icon from '@iconify/svelte';
</script>

<div
	class="card dropdown hover:bg-neutral border-2 border-neutral flex items-center h-32 cursor-pointer"
	tabindex="0"
	role="button"
	onclick="new_element.showModal()"
>
	<Icon icon="ic:baseline-plus" class="h-32" width={25} height={25} />
</div>

<dialog id="new_element" class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-xl text-white">Create a new Element</h3>
		<ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full">
			<li><p class="text-lg text-white">Title</p></li>
			<li><p class="text-lg text-white">Text</p></li>
			<li><p class="text-lg text-white">Equation</p></li>
		</ul>
	</div>

	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
