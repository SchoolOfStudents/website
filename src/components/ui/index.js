import Equation from './Equation.svelte';
import Text from './Text.svelte';
import Title from './Title.svelte';

/*
<UI.Text text="What can be done:" />
<UI.Text text="- bold text, for example, *bold text*" />
<UI.Text text="- italic text, for example, _italic text_" />
<UI.Text text="- strikethrough text, for example, ~strikethrough text~" />
<UI.Text text="- mark text, for example, !mark text!" />
<UI.Equation math={equation} displayMode />
<UI.Equation math={equation2} displayMode />


    let equation = 'f(x) = \\int_{-\\infty}^\\infty \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}';
    let equation2 = '= \\displaystyle \\prod_{j=0}^{\\infty}\\frac{1}{(1-q^{5j+2})(1-q^{5j+3})},';
*/
const UI = {
    Equation,
    Text,
    Title
};

export default UI;