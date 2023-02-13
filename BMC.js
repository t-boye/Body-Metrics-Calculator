function calculateBMI() {
  // Get the user's weight and height input
  var weightInput = parseFloat(document.getElementById("weight").value);
  var heightInput = parseFloat(document.getElementById("height").value);
  
  // Validate the form input
  if (isNaN(weightInput) || isNaN(heightInput) || weightInput <= 0 || heightInput <= 0) {
    alert("Please enter valid values for weight and height.");
    return;
  }
  
  // Calculate the BMI
  var bmi = weightInput / (heightInput * heightInput);
  
  // Determine if the BMI is underweight, normal, or overweight
  var emoji;
  if (bmi < 18.5) {
    emoji = "🤢";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    emoji = "😃";
  } else {
    emoji = "🤮";
  }
  
  // Display the result on the web page
  document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2) + " " + emoji;
  
  // Display the result in an alert
  alert("Your BMI is: " + bmi.toFixed(2) + " " + emoji);
}

function calculateBSA() {
  // Get the user's weight and height input
  var weightInput = parseFloat(document.getElementById("weight").value);
  var heightInput = parseFloat(document.getElementById("height").value);
  
  // Validate the form input
  if (isNaN(weightInput) || isNaN(heightInput) || weightInput <= 0 || heightInput <= 0) {
    alert("Please enter valid values for weight and height.");
    return;
  }
  
  // Calculate the BSA
  var bsa = Math.sqrt(weightInput * heightInput / 3600);
  
  // Display the result on the web page
  document.getElementById("result").innerHTML = "Your BSA is: " + bsa.toFixed(2);
  
  // Display the result in an alert
  alert("Your BSA is: " + bsa.toFixed(2));
}
