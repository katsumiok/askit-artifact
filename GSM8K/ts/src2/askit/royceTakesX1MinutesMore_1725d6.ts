// Recompilation count: 0
export function royceTakesX1MinutesMore_1725d6({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Royce takes 'x1' minutes more than double Rob to shingle a house. If Rob takes 'x2' hours, how many minutes does Royce take?
        let robMinutes = x2 * 60; // converting hours to minutes
        let royceMinutes = (2 * robMinutes) + x1;
        return royceMinutes;
    }
