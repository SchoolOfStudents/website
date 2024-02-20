<script>
	import { onMount } from 'svelte';
	import mermaid from 'mermaid';
	import markdownit from 'markdown-it';

	// The default diagram
	let diagram = `\
erDiagram
    CUSTOMER }|..|{ DELIVERY-ADDRESS : has
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER ||--o{ INVOICE : "liable for"
    DELIVERY-ADDRESS ||--o{ ORDER : receives
    INVOICE ||--|{ ORDER : covers
    ORDER ||--|{ ORDER-ITEM : includes
    PRODUCT-CATEGORY ||--|{ PRODUCT : contains
    PRODUCT ||--o{ ORDER-ITEM : "ordered in"`;

	let container;

	async function renderDiagram() {
		console.log(diagram);
		const { svg } = await mermaid.render('mermaid', diagram);
		container.innerHTML = svg;
	}

	// Placeholder plugin function for demonstration
	function myAsyncPlugin(md, options) {
		const defaultOptions = {};
		const opts = Object.assign({}, defaultOptions, options);

		md.core.ruler.push('async_placeholder', (state) => {
			state.tokens.forEach((token) => {
				if (token.type === 'inline' && token.content.includes('async_placeholder')) {
					token.content = token.content.replace('async_placeholder', 'async content replaced');
				}
			});
		});
	}

	async function preprocessMarkdown(content) {
		// Perform asynchronous operations, e.g., fetching data or processing
		// For illustration, replacing a specific placeholder with fetched content
		const asyncData = await fetchData();
		return content.replace('async_placeholder', asyncData);
	}

	// Main function to use markdown-it with the plugin
	async function processMarkdown(content) {
		const md = markdownit().use(myAsyncPlugin);

		// Pre-process content asynchronously
		const preprocessedContent = await preprocessMarkdown(content);

		// Now, process the content synchronously with markdown-it
		const result = md.render(preprocessedContent);
		return result;
	}

	const md = markdownit().use(myAsyncPlugin);

	onMount(() => {
		renderDiagram();
	});

	// $: diagram && renderDiagram();
</script>

<main>
	<pre contenteditable="true" bind:innerHTML={diagram} />
	<span bind:this={container}> </span>
</main>
