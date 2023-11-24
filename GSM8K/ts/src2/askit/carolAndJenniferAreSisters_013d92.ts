// Recompilation count: 0
export function carolAndJenniferAreSisters_013d92({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    const signaturesJanniferHas = 44;
    const currentSignatures = x1 + signaturesJanniferHas;

    if(currentSignatures >= x2) {
        return 0; // No signatures needed as they have already reached or exceeded their goal.
    } else {
        return x2 - currentSignatures; // They need to collect this many more signatures to reach their goal.
    }
}
