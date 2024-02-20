import daisyuiColors from 'daisyui/src/theming/themes';
import mermaid from 'mermaid';

// TODO: Add support for custom themes
const colors = daisyuiColors["dark"];

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


function mermaidPlugin(md) {
    const proxy = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options);
    const defaultFenceRenderer = md.renderer.rules.fence || proxy;

    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        const code = token.content.trim();
        if (token.info === 'mermaid') {
            return `<div class="mermaid flex items-center justify-center">${code}</div>`;
        }
        return defaultFenceRenderer(tokens, idx, options, env, self);
    }
}

function update() {
    setInterval(() => {
        mermaid.init(undefined, '.mermaid')
    })
}

mermaidPlugin.update = update;
export default mermaidPlugin;