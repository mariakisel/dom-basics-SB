let inputValues = document.body.appendChild(document.createElement('input'));
let h2 = document.body.appendChild(document.createElement('h2'));

let timeoutId;

inputValues.oninput = function() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(displayInputValue, 300);
}

let displayInputValue = function() {
    document.querySelector('h2').textContent = inputValues.value;
}
