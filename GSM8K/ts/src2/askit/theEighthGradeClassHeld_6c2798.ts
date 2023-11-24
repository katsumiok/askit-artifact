// Recompilation count: 0
export function theEighthGradeClassHeld_6c2798({ x1 }: {
    x1: number;
}): number {
        // The eighth-grade class held a bake-off. Kelsie made two times more cookies than Josh. Josh made one-fourth the number of cookies that Suzanne made. If Suzanne made 'x1' cookies, how many did Kelsie make?
        
        let suzannesCookies = x1;
        let joshsCookies = suzannesCookies / 4;
        let kelsiesCookies = joshsCookies * 2;
        return kelsiesCookies;
    }
