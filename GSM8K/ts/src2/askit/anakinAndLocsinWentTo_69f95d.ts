// Recompilation count: 0
export function anakinAndLocsinWentTo_69f95d({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
        // Anakin and Locsin went to the beach today. Anakin caught 'x1' starfish, 'x2' sea horses, and 'x3' clownfish. 
        //While Locsin caught 'x4' fewer starfish than Anakin, 'x5' fewer sea horses than Anakin, and 'x6' more clownfish than Anakin. 
        //How many fish were they able to catch?
    
    const anakinCaught = x1 + x2 + x3;
    const locsinCaught = (x1 - x4) + (x2 - x5) + (x3 + x6);
    return anakinCaught + locsinCaught;
}
