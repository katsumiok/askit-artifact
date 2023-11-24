// Recompilation count: 0
export function arnoldMadelineCamdenAndSarah_9c6b20({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Arnold, Madeline, Camden, and Sarah painted 'x1' easter eggs. Arnold and Madeline painted the same number of eggs. Camden and Sarah painted a total of 'x2' eggs, but Camden painted 'x3' more than Sarah. How many more eggs did Camden paint than Arnold?

        // the number of eggs Arnold painted
        let arnold = (x1 - x2) / 2;

        // the number of eggs Sarah painted
        let sarah = (x2 - x3) / 2;

        // the number of eggs Camden painted
        let camden = sarah + x3;

        // the difference between the number of eggs Camden and Arnold painted
        return camden - arnold;
}
