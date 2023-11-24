// Recompilation count: 0
export function shaniaIsDesigningHerOwn_8d54ad({}: {}): number {
    // determine the pre lace trim length of the dress
    const finalDressLength: number = 140;
    const laceTrimLength: number = 20;
    const dressLengthBeforeTrim: number = finalDressLength - laceTrimLength;

    // determine the original design length of the dress
    // if longer design is the original design length extended by 50%, 
    // then the original design length = longer design length / 1.5
    const originalDesignLength: number = dressLengthBeforeTrim / 1.5;

    return originalDesignLength;
}
