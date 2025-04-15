
const input: string[]=  ["apple", "banana", "apple", "orange", "banana"];
function eliminarDuplciados(input: string[]): string[]{
    const output: string[] = [];
for (let i = 0; i < input.length; i++) {
    let repetido = false;
    for (let j = 0; j < output.length; j++) {
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

console.log(eliminarDuplciados(input))