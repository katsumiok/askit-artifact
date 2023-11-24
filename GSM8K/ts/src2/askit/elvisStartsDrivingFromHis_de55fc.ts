// Recompilation count: 1
export function elvisStartsDrivingFromHis_de55fc({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Elvis starts driving from his house and travels west for 'x1' hours. Then he turns around and travels east for 'x2' hours. 
        // If he was driving at an average speed of 18mph for both parts of the journey, 
        // how far is he from his house now?

        const speed = 18; // Average speed in mph
        const westDistance = x1 * speed; // Travel distance to the west
        const eastDistance = x2 * speed; // Travel distance to the east

        // Subtract the distance travelled back east from the west to get the current distance from home
        const currentDistance = westDistance - eastDistance;

        // return the absolute value because distance can't be negative
        return Math.abs(currentDistance); 
    }
