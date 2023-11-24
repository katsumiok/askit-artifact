// Recompilation count: 0
export function aSimpleFoldingNewspaperOr_7c4609({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // A simple folding newspaper or tabloid can be made by folding a piece of paper vertically and unfolding. 
        // Then, say, page 'x1' is printed on the left back, page 'x2' is printed on the left front, and then, perhaps page 'x3' is printed on the right back, and page 'x4' is printed on the right front.
        // How many pieces of paper would be used in a 32-page tabloid?

        // Each piece of folded paper can hold 4 pages: two on the front and two on the back
        return 32 / 4;
}
