// Recompilation count: 0
export function sunnyIsSellingGingerbreaAnd_782729({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // On Saturday, he sold 'x1' boxes of gingerbread and 'x2' fewer boxes of apple pie
        let saturdayGingerbread = x1;
        let saturdayApplePie = x4 - x2;
        
        // On Sunday, he sold 'x3' more boxes of gingerbread than on Saturday and 'x4' boxes of apple pie
        let sundayGingerbread = x1 + x3;
        let sundayApplePie = x4;
        
        // Total earning from selling gingerbread and apple pie
        let total = (saturdayGingerbread + sundayGingerbread) * 6 + (saturdayApplePie + sundayApplePie) * 15;
        
        return total; 
    }
