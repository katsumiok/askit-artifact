// Recompilation count: 0
export function miloIsMakingAMosaic_ba35bc({ x1 }: {
    x1: number;
}): number {
    // first calculate the total chips Milo has
    let totalChips = x1 * 2;

    // since Milo wants his mosaic to be three inches tall and it takes twelve glass chips to make every square inch of the mosaic 
    // then he needs three * twelve = 36 chips for each inch of length
    return totalChips / 36;
}
