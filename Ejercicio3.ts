
const entrada: number[] = [0, 1, 2, 4, 5, 7];
function resumirRangos(nums: number[]): string[] {
    const resultado: string[] = [];

    let inicio = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i === nums.length - 1 || nums[i] + 1 !== nums[i + 1]) {
            if (inicio === i) {
                resultado.push(`${nums[i]}`);
            } else {
                
                resultado.push(`${nums[inicio]}->${nums[i]}`);
            }
            inicio = i + 1; 
        }
    }

    return resultado;
}
console.log(resumirRangos(entrada)); 