var palabaras = ["eat", "tea", "tan", "ate", "nat", "bat"];
function agruparAnagramas(palabras) {
    var mapa = {};
    for (var _i = 0, palabras_1 = palabras; _i < palabras_1.length; _i++) {
        var palabra = palabras_1[_i];
        var clave = palabra.split('').sort().join('');
        if (clave in mapa) {
            mapa[clave].push(palabra);
        }
        else {
            mapa[clave] = [palabra];
        }
    }
    return Object.values(mapa);
}
console.log(agruparAnagramas(palabaras));
