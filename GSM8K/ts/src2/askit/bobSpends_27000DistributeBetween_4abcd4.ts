// Recompilation count: 0
export function bobSpends_27000DistributeBetween_4abcd4({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // calculation total books bob can buy
    let totalBooks = Math.floor(27000 / 500) * x2;
    
    // calculate books per school
    let schoolBooks = Math.floor(totalBooks / x1);
    
    return schoolBooks;
}
