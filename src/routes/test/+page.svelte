<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import markdownit from 'markdown-it';
	import hljs from 'highlight.js';
	import mermaid from 'mermaid';
	import daisyuiColors from 'daisyui/src/theming/themes';
	import chroma from 'chroma-js';
	import mk from '@traptitech/markdown-it-katex';
	// https://github.com/markdown-it/markdown-it-footnote
	import footnote_plugin from 'markdown-it-footnote';
	// https://github.com/markdown-it/markdown-it-sub
	import sub_plugin from 'markdown-it-sub';
	// https://github.com/markdown-it/markdown-it-sup
	import sup_plugin from 'markdown-it-sup';
	// https://github.com/markdown-it/markdown-it-mark
	import mark_plugin from 'markdown-it-mark';

	import meramid_plugin from '$plugins/meramid';

	import mak from './mak.md?raw';
	const currentTheme = 'dark';
	// if (currentTheme === 'cupcake') {
	// 	import('highlight.js/styles/default.css');
	// } else {
	// 	import('highlight.js/styles/night-owl.css');
	// }

	const md = markdownit({
		highlight: function (str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return hljs.highlight(str, { language: lang }).value;
				} catch (__) {}
			}

			return ''; // use external default escaping
		}
	});

	md.use(mk, { blockClass: 'katex-html', errorColor: ' #cc0000' });
	md.use(footnote_plugin);
	md.use(sub_plugin);
	md.use(sup_plugin);
	md.use(mark_plugin);
	md.use(meramid_plugin);

	let data = mak;
	let result = '';

	// https://mermaid.js.org/config/schema-docs/config.html#theme

	function convert(oklchString) {
		const [l, c, h] = oklchString.match(/\d+\.?\d*/g).map(Number);
		return chroma(l / 100, c, h, 'oklch').hex();
	}

	const colors = daisyuiColors[currentTheme];
	console.log(colors);
	/* 
    				primaryColor: chroma(convert(colors.primary)).hex(),
				primaryBorderColor: chroma(convert(colors.primary)).hex(),
				primaryTextColor: chroma(convert(colors.primary)).hex()
    */
	onMount(() => {
		document.querySelector('html').setAttribute('data-theme', currentTheme);
		mermaid.initialize({
			theme: 'base', // default, forest, dark, neutral, or "none
			themeVariables: {
				primaryColor: colors['base-200'],
				primaryTextColor: colors['neutral-content'],
				primaryBorderColor: colors['base-content'],
				lineColor: colors['neutral'],
				secondaryColor: colors['base-300'],
				tertiaryColor: colors['base-300']
			}
		});
		// mermaid.init(undefined, '.mermaid');
		result = md.render(data);
		setTimeout(() => mermaid.init(undefined, '.mermaid'), 0);
	});

	$: if (data && browser) {
		result = md.render(data);
		setTimeout(() => mermaid.init(undefined, '.mermaid'), 0);
	}
</script>

<div class="grid h-screen grid-cols-2">
	<textarea bind:value={data} class="p-2" />

	<article class="prose lg:prose-lg p-2 prose-neutral">
		{@html result}
	</article>
</div>

<style>
</style>
