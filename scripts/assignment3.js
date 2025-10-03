function convertTemperature(temperature, scale) {
    if (scale === "C") {
        
        const fahrenheit = (temperature * 9/5) + 32;
        return `${fahrenheit.toFixed(2)} °F`;
    } else if (scale === "F") {
        
        const celsius = (temperature - 32) * 5/9;
        return `${celsius.toFixed(2)} °C`;
    } else {
        return "Invalid scale. Please use 'C' or 'F'.";
    }
}



function displayResult() {
    
    const temperatureInput = document.getElementById("temperatureInput");
    const scaleSelect = document.getElementById("scaleSelect");
    const resultSpan = document.getElementById("result");

    const tempValue = parseFloat(temperatureInput.value);
    const scaleValue = scaleSelect.value;

    
    if (isNaN(tempValue)) {
        resultSpan.textContent = "Please enter a valid number.";
        return;
    }

    
    const convertedTemp = convertTemperature(tempValue, scaleValue);
    resultSpan.textContent = convertedTemp;
}