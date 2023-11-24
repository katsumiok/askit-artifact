// Recompilation count: 0
export function aTyrannosauRexAteHalf_129461({ x1 }: {
    x1: number;
}): number {
        // A Tyrannosaurus rex ate half of a small triceratops it had hunted. When it left, a pack of velociraptors scavenged half of what was left. 
        // A group of lazy Allosaurus gulped down the last 'x1' kilograms of meat. 
        // How many kilograms of meat were on the triceratops before the T-Rex ate?
        
        // We can solve this problem with a simple equation.
        // Let's assume the initial weight of the triceratops was 'w'.
        // After T-Rex ate half, amount left = w/2.
        // After velociraptors scavenged half of what was left, amount left = w/2/2 = w/4.
        // Given that the Allosaurus ate the last 'x1' kilograms of meat, we can say that w/4 = x1.
        // So the initial weight of triceratops = w = 4*x1.

        return 4 * x1;
    }
