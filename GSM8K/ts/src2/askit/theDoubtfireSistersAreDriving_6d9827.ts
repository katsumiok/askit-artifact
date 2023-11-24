// Recompilation count: 0
export function theDoubtfireSistersAreDriving_6d9827({ x1 }: {
    x1: number;
}): number {
    // The Doubtfire sisters are driving home with 'x1' kittens 
    // adopted from the local animal shelter when their mother 
    // calls to inform them that their two house cats have just 
    // had kittens. She says that Patchy, the first cat, has had 
    // thrice the number of adopted kittens, while Trixie, the other 
    // cat, has had 12. How many kittens does the Doubtfire family now have?

    let patchyKittens = 3 * x1; // Patchy has thrice the number of adopted kittens.
    let trixieKittens = 12; // Trixie has 12 kittens.

    let totalKittens = x1 + patchyKittens + trixieKittens; // Sum of all kittens.

    return totalKittens;
}
