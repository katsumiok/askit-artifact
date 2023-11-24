// Recompilation count: 0
export function narutoCanLiftAMountain_c3998b({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Naruto can lift a mountain ten times higher than Kagiyami can.  
    // But Kagiyami can lift a mountain 'x1' times higher than Saskay can.
    // And Saskay can lift a mountain 'x2' times higher than Pompei can.
    // If Pompei can lift a mountain 'x3' inch, how high can Naruto lift a mountain, in feet?
    const inchesToFeet = 0.08333333;
    const pompei = x3;
    const saskay = pompei * x2;
    const kagiyami = saskay * x1;
    const naruto = kagiyami * 10;
    // Convert Naruto's lifting capacity to feet
    return naruto * inchesToFeet;
}
