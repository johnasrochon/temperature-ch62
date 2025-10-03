function celsiusToFahrenheit(){
    let celsius = prompt("Enter temperature in celsius");
    const fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`${celsius}℃ is equal to ${fahrenheit}℉.`);
    document.getElementById("results").innerHTML=`<p>${celsius}℃ is equal to ${fahrenheit}℉.</p>`;
    return fahrenheit;
}




