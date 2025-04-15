function letrasUnicas(cadenas) {
    var resultado = [];
    for (var _i = 0, cadenas_1 = cadenas; _i < cadenas_1.length; _i++) {
        var cadena = cadenas_1[_i];
        var letrasVistas = {};
        var esUnica = true;
        for (var _a = 0, cadena_1 = cadena; _a < cadena_1.length; _a++) {
            var letra = cadena_1[_a];
            if (letrasVistas[letra]) {
                esUnica = false;
                break;
            }
            letrasVistas[letra] = true;
        }
        if (esUnica) {
            resultado.push(cadena);
        }
    }
    return resultado;
}
// Prueba
var cadenas = ["hola", "casa", "perro", "luz"];
console.log(letrasUnicas(cadenas)); // ['hola', 'luz']
