document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const convertButton = document.getElementById("convert");
    const resultText = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            resultText.textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
        } else {
            resultText.textContent = "Please enter a valid temperature in Celsius.";
        }
    });
});
