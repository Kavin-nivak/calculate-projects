let input = document.querySelector("input");

function addValue(elementVal) {
    // Prevent multiple decimal points in a number
    if (elementVal === '.') {
        const parts = input.value.split(/[\+\-\*\/]/);
        if (parts[parts.length - 1].includes('.')) {
            return; // Don't add another decimal point
        }
    }
    
    // Prevent adding operator if input is empty
    if (['+', '-', '*', '/', '%'].includes(elementVal) && !input.value) {
        return;
    }
    
    input.value += elementVal;
}

function clearValue() {
    input.value = "";
}

function deleteVal() {
    input.value = input.value.slice(0, -1);
}

function calculate() {
    try {
        // Replace all instances of numbers with leading zeros (except .0) to prevent octal
        let expression = input.value.replace(/\b0+(?!\.)(\d+)/g, '$1');
        
        // Validate expression ends with a number
        if (!/[\d)]$/.test(expression)) {
            throw new Error("Invalid expression");
        }
        
        // Use Function constructor instead of eval for safer evaluation
        input.value = new Function('return ' + expression)();
    } catch(err) {
        alert("Invalid input");
        input.value = "";
    }
}