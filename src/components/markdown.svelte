<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import markdownit from 'markdown-it';
	import hljs from 'highlight.js';
	import mermaid from 'mermaid';
	import daisyuiColors from 'daisyui/src/theming/themes';
	import mk from '@traptitech/markdown-it-katex';
	import footnote_plugin from 'markdown-it-footnote';
	import sub_plugin from 'markdown-it-sub';
	import sup_plugin from 'markdown-it-sup';
	import mark_plugin from 'markdown-it-mark';

	import mak from './mak.md?raw';
	const currentTheme = 'dark';

	/* */
	function markdownPlugin(md, options) {
		const proxy = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options);

		const defaultFenceRenderer = md.renderer.rules.fence || proxy;
		const defaultInlineRenderer = md.renderer.rules.text || proxy;

		// Extend the inline renderer to handle LaTeX inline expressions
		md.renderer.rules.text = function (tokens, idx, options, env, self) {
			const token = tokens[idx];
			const inlineLatex = token.content.match(/\$(.*?)\$/g);

			if (inlineLatex) {
				// Process each LaTeX match within the text
				const processedContent = token.content.replace(/\$(.*?)\$/g, function (match, formula) {
					// This is a simplistic handler, you might need a proper LaTeX renderer
					// For example, using Katex: return katex.renderToString(formula);
					// Here, we just wrap the formula in a span for custom styling or further processing
					return `<span class="latex-inline">${formula}</span>`;
				});
				return processedContent;
			}

			// Fallback to the default renderer for text tokens without inline LaTeX
			return defaultInlineRenderer(tokens, idx, options, env, self);
		};
	}

	/* Create the plugin to integrate mermaid to markdown */
	function mermaidPlugin(md, options) {
		const proxy = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options);
		const defaultFenceRenderer = md.renderer.rules.fence || proxy;

		// Function to check if the token matches Mermaid syntax
		function isValidMermaidBlock(token) {
			// check if the token is a code fence
			if (token.type !== 'fence' || token.info.trim() !== 'mermaid') return false;
			return true;
		}

		// Override the fence renderer to handle Mermaid blocks
		md.renderer.rules.fence = function (tokens, idx, options, env, self) {
			if (isValidMermaidBlock(tokens[idx])) {
				return `<div class="mermaid flex items-center justify-center">${tokens[idx].content}</div>\n`;
			}
			// Fallback to the default renderer
			return defaultFenceRenderer(tokens, idx, options, env, self);
		};
	}

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
	// md.use(mark_plugin);
	md.use(mermaidPlugin);

	let data = mak;
	let result = '';

	const colors = daisyuiColors[currentTheme];

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
