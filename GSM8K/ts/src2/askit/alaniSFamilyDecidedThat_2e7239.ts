// Recompilation count: 0
export function alaniSFamilyDecidedThat_2e7239({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Alani's family decided that the children should write stories of any kind. They were then required to read all of the stories they'd written to the family at the end of the weekend. Alani wrote 'x1' stories in the first week, her brother Braylen wrote 'x2' stories, and her sister Margot wrote 'x3' stories. If they each doubled the number of stories they'd written in the first week in the second week, calculate the total number of stories they wrote altogether.
    return (x1 + x2 + x3) + (2 * (x1 + x2 + x3));
}
