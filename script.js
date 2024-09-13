function calculateBMI() {
    let height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    
    // Convert height from centimeters to meters if necessary
    if (height > 3) {  // assuming input in centimeters if height > 3 meters
        height = height / 100;
    }
    
    if (height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let category = '';
        
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }
        
        document.getElementById('bmiResult').innerText = `Your BMI is ${bmi} (${category})`;
    } else {
        document.getElementById('bmiResult').innerText = 'Please enter valid height and weight';
    }
}
