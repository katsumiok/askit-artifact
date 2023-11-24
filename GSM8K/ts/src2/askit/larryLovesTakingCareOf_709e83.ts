// Recompilation count: 0
export function larryLovesTakingCareOf_709e83({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Larry's cats count
    let catsCount = x1;
    // Larry's dogs count which is x2 times of cats count.
    let dogsCount = catsCount * x2;
    // Larry has x3 fewer rabbits than dogs. So, deduct x3 from dogs count.
    let rabbitsCount = dogsCount - x3;
    // Larry's fish count is 3 times of rabbits count
    let fishCount = rabbitsCount * 3;
    // Larry's gerbils count is 1/3 times of his fish count.
    let gerbilsCount = fishCount / 3;
    // Now, add all pets count to find out how many pets Larry has.
    let totalPetsCount = catsCount + dogsCount + rabbitsCount + fishCount + gerbilsCount;
    // Return total pets count.
    return totalPetsCount;
}
