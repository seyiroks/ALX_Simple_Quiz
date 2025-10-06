document.getElementById('add-task-btn').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('subtract-task-btn').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('multiply-task-btn').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('divide-task-btn').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
