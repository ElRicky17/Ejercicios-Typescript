var input = ["apple", "banana", "apple", "orange", "banana"];
function eliminarDuplciados(input) {
    var output = [];
    for (var i = 0; i < input.length; i++) {
        var repetido = false;
        for (var j = 0; j < output.length; j++) {
            if (input[i] === output[j]) {
                repetido = true;
                break;
            }
        }
        if (!repetido) {
            output.push(input[i]);
        }
    }
    return output;
}
var tamaño = input.length;
console.log(tamaño);
console.log(eliminarDuplciados(input));
