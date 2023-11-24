// Recompilation count: 0
export function nancyIsCleaningOutHer_e25bbc({ x1 }: {
    x1: number;
}): number {
        // Nancy is cleaning out her old woodshed. She saw 'x1' spiders, 1/3rd as many millipedes as spiders, and a number of stink bugs equal to twice the number of millipedes minus 12. How many bugs did she count total?
        let spiders = x1;
        let millipedes = spiders / 3;
        let stinkBugs = 2 * millipedes - 12;

        return spiders + millipedes + stinkBugs;
    }
