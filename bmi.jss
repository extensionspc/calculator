document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted');
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    console.log('Weight:', weight, 'Height:', height);
    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        const bmi = weight / (height * height);
        console.log('BMI:', bmi);
        document.getElementById('bmi-result').innerText = `Your BMI is ${bmi.toFixed(2)}`;
    } else {
        console.log('Invalid input');
        document.getElementById('bmi-result').innerText = 'Please enter valid numbers for weight and height.';
    }
});
