// Recompilation count: 7
export function joHasBeenMakingFace_962a46({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
        // Jo has been making face masks. She can make 'x1' small masks with 'x2' yards of material and 'x3' large masks with 2.25 yards of material. How much material would she need to make 'x4' small and 'x5' large masks for her class?
    
    // Calculate the yards of material required per one small and large mask
    let materialForSmallMask = x2 / x1;
    let materialForLargeMask = 2.25 / x3;

    // Calculate the total yards of material required for 'x4' small masks and 'x5' large masks
    let totalMaterialRequired = (materialForSmallMask * x4) + (materialForLargeMask * x5)

    // Return the total yards of material required
    return totalMaterialRequired;
}

