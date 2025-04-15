
function letrasUnicas(cadenas: string[]): string[] {
    const resultado: string[] = [];
  
    for (const cadena of cadenas) {
      const letrasVistas: { [letra: string]: boolean } = {};
      let esUnica = true;
  
      for (const letra of cadena) {
        if (letrasVistas[letra]) {
          esUnica = false;
          break;
        }
        letrasVistas[letra] = true;
      }
  
      if (esUnica) {
        resultado.push(cadena);
      }
    }
  
    return resultado;
  }
  
  const cadenas: string[] = ["hola", "casa", "perro", "luz"];
  console.log(letrasUnicas(cadenas)); // ['hola', 'luz']
  