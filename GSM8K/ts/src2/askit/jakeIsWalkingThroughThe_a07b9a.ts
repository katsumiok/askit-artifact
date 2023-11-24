// Recompilation count: 0
export function jakeIsWalkingThroughThe_a07b9a({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number { 
    // Jake is walking through the Museum of Entomology. He sees 'x1' spiders with 'x2' legs each, 'x3' insects with 'x4' legs each, and 'x5' rare mutant invertebrates with 'x6' legs each. How many legs does Jake see total?
    
    let spiderLegs = x1 * x2;
    let insectLegs = x3 * x4;
    let mutantLegs = x5 * x6;

    let totalLegs = spiderLegs + insectLegs + mutantLegs;

    return totalLegs;

}
