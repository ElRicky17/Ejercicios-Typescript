function frecuenciaPalabras(texto: string): { [key: string]: number } {
    const palabras = texto.split(/\s+/);
    const frecuencias: { [key: string]: number } = {};

    for (let palabra of palabras) {
        // 🔹 Convertimos a minúscula y limpiamos signos de puntuación
        palabra = palabra.toLowerCase().replace(/[^\wáéíóúüñ]/gi, "");

        if (palabra in frecuencias) {
            frecuencias[palabra]++;
        } else {
            frecuencias[palabra] = 1;
        }
    }

    return frecuencias;
}
console.log(frecuenciaPalabras("Hola mundo. Hola clase, hola estudiantes!"));  