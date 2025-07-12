function convertTemperature() {
  const temp = parseFloat(document.getElementById("temperature").value);
  const type = document.getElementById("type").value;
  const resultField = document.getElementById("result");

  if (isNaN(temp)) {
    resultField.value = "Please enter a number";
    return;
  }

  let result;
  if (type === "fahrenheit") {
    result = ((temp - 32) * 5) / 9;
    resultField.value = result.toFixed(4) + " °C";
  } else if (type === "celsius") {
    result = (temp * 9) / 5 + 32;
    resultField.value = result.toFixed(4) + " °F";
  } else if (type === "kelvin") {
    result = temp - 273.15;
    resultField.value = result.toFixed(4) + " °C";
  }
}
