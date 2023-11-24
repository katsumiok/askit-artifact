// Recompilation count: 0
export function larryCookedDumplingsForA_ed50b4({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Larry cooked dumplings for a group of friends.  There are 'x1' males, including Larry, and 'x2' females among them. Each male ate 'x3' more dumpling than each female. How many dumplings did Larry cook if each female ate 'x4' dumplings and there were no leftovers?
    let dumplingsEatenByFemales = x2 * x4;
    let dumplingsEatenByMales = x1 * (x4 + x3);
    
    return dumplingsEatenByFemales + dumplingsEatenByMales;
}
