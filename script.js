function escogerCiudad(element) {
    alert("Cargando mensaje meteorológico de la ciudad de " + element.textContent);
}

function mensaje(element) {
    element.parentNode.remove();
}

//formula para convertir de celsious a fahrenheit
//Grados Fahrenheit = (grados centígrados × 9/5) +32.

function celsiusToFahrenheit(celsius) {
    return Math.round(9 / 5 * celsius + 32);
}

var select = document.querySelector(".temperatura select");
var temperaturas = document.querySelectorAll('.alto, .bajo');

function actualizarTemperaturas() {
    var unidad = select.value;
    temperaturas.forEach(function (temperatura) {
        console.log(temperatura)
        var valorCelsius = parseInt(temperatura.textContent);
        //console.log(temperatura.textContent)
        if (unidad === 'fahrenheit') {
            var valorFahrenheit = celsiusToFahrenheit(valorCelsius);
            temperatura.innerText = valorFahrenheit + "ºF";
        } else {
            temperatura.innerText = valorCelsius + "ºC";
        }
    });
}

select.addEventListener("change", actualizarTemperaturas);

actualizarTemperaturas();
