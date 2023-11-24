// Recompilation count: 0
export function indrasHasX1LettersIn_7ed82c({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Indras has 'x1' letters in her name.
        // Her sister's name has 'x2' more letters than half of the letters in Indras' name. 
        // How many letters are in Indras and her sister's names?
        let indrasNameLength = x1;
        let sisterNameLength = (x1 / 2) + x2; //Her sister's name has 'x2' more letters than half of the letters in Indras' name
        let totalLetters = indrasNameLength + sisterNameLength; //Total letters in Indras and her sister's names
        return totalLetters;
    }
