function frecuenciaPalabras(texto) {
    var palabras = texto.split(/\s+/);
    var frecuencias = {};
    for (var _i = 0, palabras_1 = palabras; _i < palabras_1.length; _i++) {
        var palabra = palabras_1[_i];
        // 🔹 Convertimos a minúscula y limpiamos signos de puntuación
        palabra = palabra.toLowerCase().replace(/[^\wáéíóúüñ]/gi, "");
        if (palabra in frecuencias) {
            frecuencias[palabra]++;
        }
        else {
            frecuencias[palabra] = 1;
        }
    }
    return frecuencias;
}
console.log(frecuenciaPalabras("Hola mundo. Hola clase, hola estudiantes!"));
