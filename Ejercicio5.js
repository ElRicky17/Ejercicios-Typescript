var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function rotarPalabras(frase, k) {
    var palabras = frase.split(" ");
    var n = palabras.length;
    k = k % n;
    var palabrasRotadas = __spreadArray(__spreadArray([], palabras.slice(n - k), true), palabras.slice(0, n - k), true);
    return palabrasRotadas.join(" ");
}
var frase = "Hola mundo desde TypeScript";
console.log(rotarPalabras(frase, 2));
