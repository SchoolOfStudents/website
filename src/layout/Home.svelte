<script>
	import UI from '$/UI';
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

<UI.Box edit>
	<UI.Title>This is a title</UI.Title>
</UI.Box>

<UI.Box edit center>
	<UI.Title>This is a title</UI.Title>
</UI.Box>

<UI.Title>This is a title</UI.Title>
<UI.Text>This is a text</UI.Text>

<UI.Title>This is a title $x^2$</UI.Title>
<UI.Text>This is a text $x^2$</UI.Text>

<UI.Equation math="x^2 + y^2"></UI.Equation>
<UI.Equation center>x^2 + y^2</UI.Equation>

<UI.Title>This is a *title*</UI.Title>
<UI.Text>This is a *text*</UI.Text>
<UI.Equation center>\int_a^b f(x) dx</UI.Equation>

<UI.Title>This is a ~title~</UI.Title>
<UI.Text>This is a ~text~</UI.Text>
<UI.Equation center>\displaystyle\sum_1^ki</UI.Equation>

<UI.Title>This is a !title!</UI.Title>
<UI.Text>This is a !text!</UI.Text>
<UI.Equation center>\displaystyle\prod_1^ki</UI.Equation>

<UI.Title>This is a _title_</UI.Title>
<UI.Text>This is a _text_</UI.Text>
<UI.Equation center
	>\Gamma\ \Delta\ \Theta\ \Lambda\ \Xi\ \Pi\ \Sigma\ \Upsilon\ \Phi\ \Psi\ \Omega</UI.Equation
>

<UI.Title>This is a *title</UI.Title>
<UI.Text>This is a *text</UI.Text>
<UI.Equation center>
	\leftharpoonup\ \leftharpoondown\ \rightleftharpoons\ \longleftarrow\ \Longleftarrow\
	\longrightarrow
</UI.Equation>

<UI.Title>This is a ~title</UI.Title>
<UI.Text>This is a ~text</UI.Text>

<UI.Title>This is a !title</UI.Title>
<UI.Text>This is a !text</UI.Text>

<UI.Title>This is a _title</UI.Title>
<UI.Text>This is a _text</UI.Text>

<UI.Title>This is a title*</UI.Title>
<UI.Text>This is a text*</UI.Text>

<UI.Title>This is a title~</UI.Title>
<UI.Text>This is a text~</UI.Text>

<UI.Title>This is a title!</UI.Title>
<UI.Text>This is a text!</UI.Text>

<UI.Title>This is a title_</UI.Title>
<UI.Text>This is a text_</UI.Text>

<UI.Title>This *is a title*</UI.Title>
<UI.Text>This *is a text*</UI.Text>

<UI.Title>This ~is a title~</UI.Title>
<UI.Text>This ~is a text~</UI.Text>

<UI.Title>This !is a title!</UI.Title>
<UI.Text>This !is a text!</UI.Text>

<UI.Title>This _is a title_</UI.Title>
<UI.Text>This _is a text_</UI.Text>

<style>
	.dropdown-custom {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) !important;
	}
</style>
