
const tempInput = document.getElementById("temp-input");
const tempOutput = document.getElementById("temp-output");

const fromUnitSelect = document.getElementById("from-unit-select");
const toUnitSelect = document.getElementById("to-unit-select");
const convertBtn = document.getElementById("convert-btn");

// Function to convert temperature from one unit to another
function convertTemperature(event) {

  event.preventDefault();
  // Get the temperature value and unit from the input element
  const tempValue = parseFloat(tempInput.value);
  const fromUnit = fromUnitSelect.value;


  // Convert the temperature to Kelvin
  let tempInKelvin;
  switch (fromUnit) {
    case "celsius":
      tempInKelvin = tempValue + 273.15;
      break;
    case "fr":
      tempInKelvin = (tempValue + 459.67) * 5 / 9;
      break;
    default:
      tempInKelvin = tempValue;
      break;
  }

  // Convert the temperature from Kelvin to the selected unit
  const toUnit = toUnitSelect.value;
  let tempOutputValue;
  switch (toUnit) {
    case "celsius":
      tempOutputValue = tempInKelvin - 273.15;
      break;
    case "fr":
      tempOutputValue = tempInKelvin * 9 / 5 - 459.67;
      break;
    default:
      tempOutputValue = tempInKelvin;
      break;
  }

  // Update the output element with the converted temperature
  tempOutput.value = tempOutputValue.toFixed(2);
}

convertBtn.addEventListener("click", convertTemperature);