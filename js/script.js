function findBMI() {
  var weight = parseFloat(document.getElementById("txt-weight").value);
  var heightCm = parseFloat(document.getElementById("txt-height").value) / 100;

  var BMI = (weight / (heightCm * heightCm)).toFixed(2);
  console.log(BMI);

  document.getElementById("txt-BMI").innerText = "BMI is " + BMI;

  var remark = " ";

  if (BMI < 18.5) {
    remark = "Underweight";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    remark = "Normal";
  } else if (BMI >= 25 && BMI <= 29.9) {
    remark = "Overweight";
  } else if (BMI >= 30) {
    remark = "Obese";
  }
  document.getElementById("txt-remark").innerHTML = "You are " + remark;
}
