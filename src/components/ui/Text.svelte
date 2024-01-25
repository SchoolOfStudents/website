<script>
	import { onMount, createEventDispatcher } from 'svelte';
	import { parseText } from '$stores/textParser';
	import Equation from './Equation.svelte';

	let data;
	let text = '';
	let parsedSegments = [];
	const dispatch = createEventDispatcher();

	onMount(() => {
		text = data.innerText;
		parsedSegments = parseText(text);
		dispatch('update', { parsedSegments });
	});

	$: if (data) {
		text = data.innerText;
	}
</script>

<span bind:this={data} class="hidden"><slot /></span>

<h1 class="text-lg text-white">
	{#each parsedSegments as segment}
		{#if segment.type === 'text'}
			<span>{segment.content}</span>
		{:else if segment.type === 'equation'}
			<Equation>{segment.content}</Equation>
		{:else if segment.type === 'bold'}
			<strong>{segment.content}</strong>
		{:else if segment.type === 'italic'}
			<em>{segment.content}</em>
		{:else if segment.type === 'strike'}
			<s>{segment.content}</s>
		{:else if segment.type === 'mark'}
			<mark class="bg-primary">{segment.content}</mark>
		{/if}
	{/each}
</h1>
