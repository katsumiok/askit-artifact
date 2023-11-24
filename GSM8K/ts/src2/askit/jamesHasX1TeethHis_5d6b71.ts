// Recompilation count: 0
export function jamesHasX1TeethHis_5d6b71({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // James has 'x1' teeth. His dentist drills 'x2' of them and caps 'x3' more teeth than he drills. What percentage of James' teeth does the dentist fix?
    const totalTeeth = x1;
    const drilledTeeth = x2;
    const cappedTeeth = x2 + x3;

    const fixedTeeth = drilledTeeth + cappedTeeth;

    return (fixedTeeth / totalTeeth) * 100;
}
