function parseText(text) {
    const regex = /\$(.*?)\$/g;
    let lastIndex = 0;
    let parsedSegments = [];
    text.replace(regex, (match, p1, offset) => {
        // Add the text before the equation
        if (offset > lastIndex) {
            const textSegment = text.slice(lastIndex, offset);
            parsedSegments.push(...parseTextStyle(textSegment));
        }
        // Add the equation
        parsedSegments.push({ type: 'equation', content: p1 });
        lastIndex = offset + match.length;
    });

    // Add any remaining text after the last equation
    if (lastIndex < text.length) {
        const textSegment = text.slice(lastIndex);
        parsedSegments.push(...parseTextStyle(textSegment));
    }
    return parsedSegments;
}


function parseTextStyle(text) {
    const styleRegex = /([_*~!])(.*?)\1/g;
    let lastIndex = 0;
    let styleSegments = [];
    text.replace(styleRegex, (match, p1, p2, offset) => {
        // Add the text before the styled text
        if (offset > lastIndex) {
            styleSegments.push({ type: 'text', content: text.slice(lastIndex, offset) });
        }
        // Determine the style based on the symbol
        let styleType = 'text';
        if (p1 === '*') {
            styleType = 'bold';
        } else if (p1 === '_') {
            styleType = 'italic';
        } else if (p1 === '~') {
            styleType = 'strike';
        } else if (p1 === '!') {
            styleType = 'mark';
        }
        // Add the styled text
        styleSegments.push({ type: styleType, content: p2 });
        lastIndex = offset + match.length;
    });
    // Add any remaining text after the last styled text
    if (lastIndex < text.length) {
        styleSegments.push({ type: 'text', content: text.slice(lastIndex) });
    }
    return styleSegments;
}

export { parseText };