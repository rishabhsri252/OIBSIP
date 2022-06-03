    var screen = document.getElementById('display_screen');
    function display(text)
    {
        updateContent(screen.value + text);
    } 
    function evaluateResult()
    {
        updateContent(eval(screen.value));
    }
    function backspace()
    {
        updateContent(screen.value.substring(0,screen.value.length -1));
    }
    function updateContent(text)
    {
        screen.value = text;
    }