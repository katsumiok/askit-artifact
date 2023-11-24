// Recompilation count: 0
export function theRatioOfTheElectric_f9b1d5({}: {}): number {
    // The ratio of the electric poles to electric wires needed to connect and supply the electricity in a certain neighborhood is 1:3. 
    // If the total number of electric wires needed to connect the electricity in the neighborhood is 45, 
    // calculate the total number of electric poles required by an electric company to supply the electricity in the neighborhood.

    const ratioOfPolesToWires = 1 / 3;
    const totalWires = 45;

    // Using the ratio, calculate the number of poles needed
    let totalPoles = totalWires * ratioOfPolesToWires;

    // The total number of poles should be an integer. So, we round it up to the nearest whole number.
    totalPoles = Math.ceil(totalPoles)

    return totalPoles;
}
