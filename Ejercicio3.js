var entrada = [0, 1, 2, 4, 5, 7];
function resumirRangos(nums) {
    var resultado = [];
    var inicio = 0;
    for (var i = 0; i < nums.length; i++) {
        if (i === nums.length - 1 || nums[i] + 1 !== nums[i + 1]) {
            if (inicio === i) {
                resultado.push("".concat(nums[i]));
            }
            else {
                resultado.push("".concat(nums[inicio], "->").concat(nums[i]));
            }
            inicio = i + 1;
        }
    }
    return resultado;
}
console.log(resumirRangos(entrada));
