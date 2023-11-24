// Recompilation count: 0
export function theAreaOfBillieS_4c2363({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // The area of Billie's rectangular bedroom is 'x1' square feet.
    // If the length of his room is 'x2' yards, what is the perimeter of the room in feet?

    // Convert length from yards to feet because area is in square feet
    // 1 yard is equal to 3 feet
    const length = x2 * 3;

    // Calculate the width in feet
    // Width = Area / Length
    const width = x1 / length;
    
    //Perimeter of rectangle = 2*(Length + Width)
    const perimeter = 2 * (length + width);

    return perimeter;
}
