// Recompilation count: 0
export function opheliaAndJennaAreLiving_8b8804({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Ophelia and Jenna are living in the same apartment building. 
    // They each have 'x1' fewer sofas than chairs. Jenna has 'x2' times as many chairs as Ophelia. 
    // If Ophelia has 'x3' sofas, calculate the total number of sofas and chairs that they have.

    // If Ophelia has 'x3' sofas, she has 'x3 + x1' chairs because she has 'x1' fewer sofas than chairs.
    let opheliaChairs = x3 + x1;
    let opheliaSofas = x3;

    // Jenna has 'x2' times as many chairs as Ophelia, so she has 'x2 * opheliaChairs' chairs.
    let jennaChairs = x2 * opheliaChairs;
    // As Jenna also has 'x1' fewer sofas than chairs, she has 'jennaChairs - x1' sofas.
    let jennaSofas = jennaChairs - x1;

    // The total number of sofas and chairs that they have is the sum of their chairs and sofas.
    let totalFurniture = opheliaChairs + opheliaSofas + jennaChairs + jennaSofas;

    return totalFurniture;
}
