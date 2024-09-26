document.getElementById('submit').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    // Basic validation for empty or non-numeric input
    if (isNaN(num1) || isNaN(num2)) {
        result = 'Please enter valid numbers.';
    } else {
        // Perform the selected operation
        if (operation === 'add') {
            result = num1 + num2;
        } else if (operation === 'subtract') {
            result = num1 - num2;
        } else if (operation === 'multiply') {
            result = num1 * num2;
        }
    }

    // Set the result into the result input field
    document.getElementById('result').value = result;
});
