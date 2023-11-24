// Recompilation count: 0
export function amyHadTwoEyeshadowPalettes_01e443({}: {}): number {
    // Amy had two eyeshadow palettes with four colors each and three makeup sets that came with six eyeshadow colors each. 
    // Her sister steals one of the palettes. 
    // Amy uses up half of the colors from one makeup set. 
    // How many eyeshadow colors does she have left?
    
    const paletteColors = 4;
    const makeupSetColors = 6;

    const initialPalettes = 2;
    const initialMakeupSets = 3;

    // account for a stolen palette
    const palettesAfterStealing = initialPalettes - 1; 
    // account for used half of a makeup set
    const makeupSetsAfterUsing = initialMakeupSets - 0.5; 

    const remainingColors = (palettesAfterStealing * paletteColors) + (makeupSetsAfterUsing * makeupSetColors);

    return remainingColors;
}
