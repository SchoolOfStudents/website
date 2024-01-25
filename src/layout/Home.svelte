<script>
	import UI from '$/ui';

	const example = [
		{
			type: 'title',
			content: 'This is a title'
		}
	];

	let elements = [
		{ title: 'This is a title' },
		{ text: 'This is a text' },
		{
			equation:
				'\\leftharpoonup\\ \\leftharpoondown\\ \\rightleftharpoons\\ \\longleftarrow\\ \\Longleftarrow\\ \\longrightarrow'
		},
		{
			text: 'This is a text with a *bold* word and a ~italic~ word and a !underline! word and a _underline_ word'
		}
	];
</script>

{#each elements as element}
	<UI.Box>
		{#if element.title}
			<UI.Title center>{element.title}</UI.Title>
		{:else if element.text}
			<UI.Text center>{element.text}</UI.Text>
		{:else if element.equation}
			<UI.Equation center>{element.equation}</UI.Equation>
		{/if}
	</UI.Box>
{/each}

<div class="divider">Edit mode</div>

{#each elements as element}
	<UI.Box edit>
		{#if element.title}
			<UI.Title center>{element.title}</UI.Title>
		{:else if element.text}
			<UI.Text center>{element.text}</UI.Text>
		{:else if element.equation}
			<UI.Equation center>{element.equation}</UI.Equation>
		{/if}
	</UI.Box>
{/each}

<style>
</style>
