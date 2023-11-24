// Recompilation count: 0
export function kelianHasTwoRecipesFor_2e7822({ x1 }: {
    x1: number;
}): number {
    // Kelian has two recipes for preparing dishes, one having 'x1' instructions and the second one having twice as many instructions as the first one. How many instructions does Kelian have to read to prepare the two dishes?
    let secondRecipeInstructions = x1 * 2;
    let totalInstructions = x1 + secondRecipeInstructions;
    return totalInstructions;
}
