// Recompilation count: 0
export function aClothingStoreHasX1_29f42f({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // A clothing store has 'x1' white shirts and 'x2' floral shirts.
    // Half of the white shirts have collars, hence half of the white shirts have no collars.
    let whiteNoCollars = x1 / 2;
    
    // 'x3' of the floral shirts have buttons, hence remaining of the floral shirts don't have buttons.
    let floralNoButtons = x2 - x3;
    
    // The difference between the floral shirts with no buttons and white shirts with no collars.
    return floralNoButtons - whiteNoCollars;
}
