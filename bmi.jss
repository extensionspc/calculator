document.addEventListener('DOMContentLoaded', (event) => {
    console.log('JavaScript loaded');

    document.getElementById('bmi-form').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submitted');

        const weightInput = document.getElementById('weight');
        const heightInput = document.getElementById('height');
        const resultElement = document.getElementById('bmi-result');

        console.log('Weight input element:', weightInput);
        console.log('Height input element:', heightInput);
        console.log('Result element:', resultElement);

        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        console.log('Parsed weight:', weight);
        console.log('Parsed height:', height);

        if (!isNaN(weight) && !isNaN(height) && height > 0) {
            const bmi = weight / (height * height);
            console.log('Calculated BMI:', bmi);
            resultElement.innerText = `Your BMI is ${bmi.toFixed(2)}`;
        } else {
            console.log('Invalid input detected');
            resultElement.innerText = 'Please enter valid numbers for weight and height.';
        }
    });
});
