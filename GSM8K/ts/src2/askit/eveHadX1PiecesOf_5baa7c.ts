// Recompilation count: 0
export function eveHadX1PiecesOf_5baa7c({ x1 }: {
    x1: number;
}): number {
        // Eve had 'x1' pieces of pomelos. After giving her friend some pomelos, Eve is left with 1/4 of the pomelos she originally had. How many pomelos did Eve give away?
        let pomelosLeft = x1 / 4;
        let pomelosGivenAway = x1 - pomelosLeft;
        return pomelosGivenAway;
    }
