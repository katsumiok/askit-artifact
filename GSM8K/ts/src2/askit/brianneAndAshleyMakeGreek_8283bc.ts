// Recompilation count: 0
export function brianneAndAshleyMakeGreek_8283bc({ x1 }: {
    x1: number;
}): number {
        // Brianne and Ashley make greek orange pie. Ashley brought five boxes with ten oranges in each box, while Brianne brought 'x1' more oranges than Ashley. If one greek orange pie needs three oranges, how many greek orange pies can they make?

        // Ashley brought
        const ashleyOranges = 5 * 10
        // Brianne brought
        const brianneOranges = ashleyOranges + x1;
        // total oranges they have
        const totalOranges = ashleyOranges + brianneOranges;
        // how many pies they can make
        const pies = totalOranges / 3;
        
        return Math.floor(pies);
    }
