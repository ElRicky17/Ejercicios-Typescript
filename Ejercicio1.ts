
const palabaras: string[] = ["eat", "tea", "tan", "ate", "nat", "bat"];

function agruparAnagramas(palabras: string[]): string[][] {
    const mapa: { [clave: string]: string[] } = {};
  
    for (const palabra of palabras) {

      const clave = palabra.split('').sort().join('');
  
      if (clave in mapa) {
        mapa[clave].push(palabra);
      } else {
        mapa[clave] = [palabra];
      }
    }
    return Object.values(mapa);
  }
  
 console.log(agruparAnagramas(palabaras)); 
 
