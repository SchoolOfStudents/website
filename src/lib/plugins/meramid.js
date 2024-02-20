

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
    }
};


export default mermaidPlugin