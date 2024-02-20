/*
 * Custom modified version of markdown-it-katex
 * https://www.npmjs.com/package/@traptitech/markdown-it-katex
 */
import katex from 'katex';

function isValidDelim(state, pos) {
    const max = state.posMax;
    const prevChar = pos > 0 ? state.src.charCodeAt(pos - 1) : -1;
    const nextChar = pos + 1 <= max ? state.src.charCodeAt(pos + 1) : -1;

    const isPrevSpaceOrTab = prevChar === 0x20 || prevChar === 0x09;
    const isNextSpaceOrTab = nextChar === 0x20 || nextChar === 0x09;
    const isNextNum = nextChar >= 0x30 && nextChar <= 0x39;

    return {
        can_open: !isNextSpaceOrTab,
        can_close: !isPrevSpaceOrTab && !isNextNum
    };
}

function math_inline(state, silent) {
    // Early exit if not starting with "$" or is silent.
    if (state.src[state.pos] !== '$') return false;

    const openDelimRes = isValidDelim(state, state.pos);
    if (!openDelimRes.can_open) {
        if (!silent) state.pending += '$';
        state.pos += 1;
        return true;
    }

    let end = state.pos + 1;
    let matchEnd;

    while ((matchEnd = state.src.indexOf('$', end)) !== -1) {
        if (state.src[matchEnd - 1] !== '\\' || (state.src.slice(state.pos, matchEnd).match(/\\{2}/g) || []).length % 2 === 0) {
            // Found potential end or escaped $
            const isEscaped = (state.src[matchEnd - 1] === '\\');
            if (!isEscaped || isEscaped && (matchEnd - end - 1) % 2 === 0) break;  // Ensure even number of escapes
        }
        end = matchEnd + 1;
    }

    if (matchEnd === -1) {
        if (!silent) state.pending += '$';
        state.pos = state.pos + 1;
        return true;
    }

    if (matchEnd - state.pos === 1) { // Edge case for empty math expression $$
        if (!silent) state.pending += '$$';
        state.pos += 2;
        return true;
    }

    const closeDelimRes = isValidDelim(state, matchEnd);
    if (!closeDelimRes.can_close) {
        if (!silent) state.pending += '$';
        state.pos = end;
        return true;
    }

    if (!silent) {
        const token = state.push('math_inline', 'math', 0);
        token.markup = '$';
        token.content = state.src.slice(state.pos + 1, matchEnd);
    }

    state.pos = matchEnd + 1;
    return true;
}


function math_block(state, start, end, silent) {
    var firstLine, lastLine, next, lastPos, found = false, token,
        pos = state.bMarks[start] + state.tShift[start],
        max = state.eMarks[start]

    if (pos + 2 > max) { return false; }
    if (state.src.slice(pos, pos + 2) !== '$$') { return false; }

    pos += 2;
    firstLine = state.src.slice(pos, max);

    if (silent) { return true; }
    if (firstLine.trim().slice(-2) === '$$') {
        // Single line expression
        firstLine = firstLine.trim().slice(0, -2);
        found = true;
    }

    for (next = start; !found;) {

        next++;

        if (next >= end) { break; }

        pos = state.bMarks[next] + state.tShift[next];
        max = state.eMarks[next];

        if (pos < max && state.tShift[next] < state.blkIndent) {
            // non-empty line with negative indent should stop the list:
            break;
        }

        if (state.src.slice(pos, max).trim().slice(-2) === '$$') {
            lastPos = state.src.slice(0, max).lastIndexOf('$$');
            lastLine = state.src.slice(pos, lastPos);
            found = true;
        }

    }

    state.line = next + 1;

    token = state.push('math_block', 'math', 0);
    token.block = true;
    token.content = (firstLine && firstLine.trim() ? firstLine + '\n' : '')
        + state.getLines(start + 1, next, state.tShift[start], true)
        + (lastLine && lastLine.trim() ? lastLine : '');
    token.map = [start, state.line];
    token.markup = '$$';
    return true;
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function math_plugin(md) {
    // Default options
    const options = {
        throwOnError: false,
        errorColor: "#cc0000",
        displayMode: false,
        output: "mathml"
    };

    var inlineRenderer = function (tokens, idx) {
        const latex = tokens[idx].content;

        try {
            return katex.renderToString(latex, options);
        }
        catch (error) {
            if (options.throwOnError) { console.log(error); }
            return `<span class='katex-error' title='${escapeHtml(error.toString())}'>${escapeHtml(latex)}</span>`;
        }
    };

    var blockRenderer = function (tokens, idx) {
        const latex = tokens[idx].content + '\n';

        options.displayMode = true;
        try {
            return `<p class="katex-block ${options.blockClass}">` + katex.renderToString(latex, options) + "</p>";
        }
        catch (error) {
            if (options.throwOnError) { console.log(error); }
            return `<p class='katex-block katex-error ${options.blockClass
                }' title='${escapeHtml(error.toString())}'>${escapeHtml(latex)}</p>`;
        }
    }

    md.inline.ruler.after('escape', 'math_inline', math_inline);
    md.block.ruler.after('blockquote', 'math_block', math_block, {
        alt: ['paragraph', 'reference', 'blockquote', 'list']
    });
    md.renderer.rules.math_inline = inlineRenderer;
    md.renderer.rules.math_block = blockRenderer;
};

export default math_plugin