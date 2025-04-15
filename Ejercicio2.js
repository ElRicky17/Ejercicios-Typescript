var s = "barfoothefoobarman";
var words = ["foo", "bar"];
function encontrarSubcadena(s, words) {
    var wordLength = words[0].length; // Longitud de cada palabra
    var totalWordsLength = wordLength * words.length; // Longitud total de todas las palabras
    var indices = []; // Array para almacenar los índices de inicio de las subcadenas
    for (var i = 0; i <= s.length - totalWordsLength; i++) {
        var substring = s.substring(i, i + totalWordsLength);
        var substringWords = [];
        for (var j = 0; j < substring.length; j += wordLength) {
            substringWords.push(substring.substring(j, j + wordLength));
        }
        if (substringWords.sort().join('') === words.sort().join('')) {
            indices.push(i);
        }
    }
    return indices;
}
console.log(encontrarSubcadena(s, words)); // Salida: [0, 9]
