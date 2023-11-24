// Recompilation count: 0
export function heatherBoughtAJumboBag_3d7c7e({ x1 }: {
    x1: number;
}): number {
    // Heather bought a jumbo bag of raisins with 'x1' cups of raisins in it. She wants to make oatmeal cookies, granola, and snack mix with the raisins. A batch of oatmeal cookies takes 3/4 of a cup of raisins. How many batches of oatmeal cookies can Heather make if she divides the bag of raisins equally among the cookies, granola, and snack mix?
    const cookiesPerBatch = 3/4;
    const divisions = 3; // For cookies, granola, and snack set
    const x1ForCookies = x1/divisions;
    return Math.floor(x1ForCookies/cookiesPerBatch);
}
