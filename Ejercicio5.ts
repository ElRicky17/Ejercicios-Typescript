
function rotarPalabras(frase: string, k:number): string {
    const palabras: string[] = frase.split(" ");
    const n: number = palabras.length;
    k = k % n; 
    const palabrasRotadas: string[] = [...palabras.slice(n - k), ...palabras.slice(0, n - k)];
    return palabrasRotadas.join(" ");
}
const frase: string = "Hola mundo desde TypeScript";
console.log(rotarPalabras(frase, 2)); 