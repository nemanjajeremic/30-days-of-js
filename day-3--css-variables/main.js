let spacingInput = document.getElementById('spacing-input');
let blurInput = document.getElementById('blur-input');
let colorInput = document.getElementById('color-input');

inputs = [spacingInput, colorInput, blurInput];

inputs.forEach(input => {
    input.addEventListener('change', updateVariable);
});


function updateVariable(event) {
    if (event.target.name === 'color') {
        document.documentElement.style.setProperty(`--${event.target.name}`, `${event.target.value}`);
    } else {
        document.documentElement.style.setProperty(`--${event.target.name}`, `${event.target.value}px`);
    }
}