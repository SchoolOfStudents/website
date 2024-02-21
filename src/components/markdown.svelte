<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import markdownit from 'markdown-it';
	import hljs from 'highlight.js';
	import footnote_plugin from 'markdown-it-footnote';
	import sub_plugin from 'markdown-it-sub';
	import sup_plugin from 'markdown-it-sup';
	import mark_plugin from 'markdown-it-mark';
	import katex_plugin from '$plugins/katex';
	import mermaid_plugin from '$plugins/meramid';

	export let data = '';
	let result = '';

	// Setup markdown parser
	const md = markdownit({
		highlight: function (str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return hljs.highlight(str, { language: lang }).value;
				} catch (__) {}
			}

			return '';
		}
	});

	// Add plugins
	md.use(katex_plugin, { blockClass: 'katex-html', errorColor: ' #cc0000' });
	md.use(footnote_plugin);
	md.use(sub_plugin);
	md.use(sup_plugin);
	md.use(mark_plugin);
	md.use(mermaid_plugin);

	onMount(() => {
		result = md.render(data);
		mermaid_plugin.update();
	});

	$: if (data && browser) {
		result = md.render(data);
		mermaid_plugin.update();
	}

	/* 
    <div class="grid h-screen grid-cols-2">
	    <textarea bind:value={data} class="p-2" />
	    <article class="prose lg:prose-lg p-2 prose-neutral">
	    	{@html result}
	    </article>
    </div>
    */
</script>

<article class="prose lg:prose-lg p-2 prose-neutral">
	{@html result}
</article>
