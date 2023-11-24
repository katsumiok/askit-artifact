// Recompilation count: 0
export function zackSLockerIsHalf_6f46f9({ x1 }: { x1: number }): number {
    // Zack's locker is half as big as Timothy's locker. 
    // Peter's locker is 1/4 as big as Zack's locker. 
    // If Peter's locker is 'x1' cubic inches, 
    // how big is Timothy's locker in cubic inches?
  
    // From given conditions, we can derive that:
    // Zack's locker is 4 times bigger than Peter's
    // Timothy's locker is 2 times bigger than Zack's
    // Thus, Timothy's locker is 4 * 2 = 8 times bigger than Peter's

    return x1 * 8;
}
