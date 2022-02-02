function findBMI() {
  var weight = parseFloat(document.getElementById("txt-weight").value);
  var heightCm = parseFloat(document.getElementById("txt-height").value) / 100;

  var BMI = (weight / (heightCm * heightCm)).toFixed(2);
  console.log(BMI);

  if (!isNaN(BMI)) {
    document.getElementById("txt-BMI").innerText = "BMI is " + BMI;
    var remark = " ";
    if (BMI < 18.5) {
      remark = "Underweight";
    } else if (BMI >= 18.5 && BMI < 25) {
      remark = "Normal";
    } else if (BMI >= 25 && BMI <= 29.9) {
      remark = "Overweight";
    } else if (BMI >= 30) {
      remark = "Obese";
    }
    document.getElementById("txt-remark").innerHTML = "You are " + remark;
  } else {
    document.getElementById("txt-BMI").innerText =
      "Hey, You need to Add height and weight first !👼👼";
  }
}

function showStandardUnit(stdCheckBox) {
  var std = document.getElementById("standard-unit");
  var metric = document.getElementById("metric-unit");
  std.style.display = stdCheckBox.checked ? "block" : "none";
  metric.style.display = stdCheckBox.checked ? "none" : "block";

  document.getElementById("txt-BMI").innerText =
      "👼";
}

function showMetricUnit(checkBox) {
  var std = document.getElementById("standard-unit");
  var metric = document.getElementById("metric-unit");
  metric.style.display = checkBox.checked ? "block" : "none";
  std.style.display = checkBox.checked ? "none" : "block";

  document.getElementById("txt-BMI").innerText =
      "👼";
}