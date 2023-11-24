// Recompilation count: 0
export function helenaIsAMadScientist_5cdb8d({}: {}): number {
    // Helena is a mad scientist testing her latest creation, the Lots-of-Limbs Serum. The serum will make the drinker grow an extra arm every three days and an extra leg every five days. After fifteen days, how many new limbs will Helena’s serum cause a person to grow if they drink it?

    const days = 15;
    const armsPerThreeDays = Math.floor(days / 3);
    const legsPerFiveDays = Math.floor(days / 5);

    return armsPerThreeDays + legsPerFiveDays;
}
