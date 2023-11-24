// Recompilation count: 0
export function thereAreX1QuartsOf_a89d31({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    const students_who_drank_1_5_q = 4;
    const quarts_per_gallon = 4;
    let consumed = students_who_drank_1_5_q * 1.5; // first group of students drank 1.5 quarts each
    consumed += x2 * x3; // second group of students
    let total_quarts_at_party_start = consumed + x1;
    return total_quarts_at_party_start / quarts_per_gallon;  // convert quarts to gallons
}
