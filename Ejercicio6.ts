
function intercalarArrays(arr1: number[], arr2: number[]): any[] {
    let resultado: number[] = [];
    let longitudMaxima = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < longitudMaxima; i++) {
        if (i < arr1.length) {
            resultado.push(arr1[i]);
        }
        if (i < arr2.length) {
            resultado.push(arr2[i]);
        }
    }

    return resultado;
}
const array1: any[] = [1, 2, 3];
const array2: any[] = [ 'a', 'b'];
const resultado: any[] = intercalarArrays(array1, array2);
console.log(resultado); 