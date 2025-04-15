
const s : string =  "barfoothefoobarman";
const words : string[] = ["foo", "bar"];

function encontrarSubcadena(s: string, words: string[]): number[] {
    const wordLength: number = words[0].length;
    const totalWordsLength: number = wordLength * words.length; 
    const indices: number[] = []; 

    for (let i = 0; i <= s.length - totalWordsLength; i++) {
        const substring: string = s.substring(i, i + totalWordsLength);
        const substringWords: string[] = [];

        for (let j = 0; j < substring.length; j += wordLength) {
            substringWords.push(substring.substring(j, j + wordLength));
        }

        if (substringWords.sort().join('') === words.sort().join('')) {
            indices.push(i);
        }
    }

    return indices;
}
   
console.log(encontrarSubcadena(s,words)); 