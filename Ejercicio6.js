function intercalarArrays(arr1, arr2) {
    var resultado = [];
    var longitudMaxima = Math.max(arr1.length, arr2.length);
    for (var i = 0; i < longitudMaxima; i++) {
        if (i < arr1.length) {
            resultado.push(arr1[i]);
        }
        if (i < arr2.length) {
            resultado.push(arr2[i]);
        }
    }
    return resultado;
}
var array1 = [1, 2, 3];
var array2 = ['a', 'b'];
var resultado = intercalarArrays(array1, array2);
console.log(resultado);
