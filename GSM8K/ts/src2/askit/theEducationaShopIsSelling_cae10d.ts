// Recompilation count: 0
export function theEducationaShopIsSelling_cae10d({}: {}): number {
        const notebookPrice: number = 1.5;
        const ballpenPrice: number = 0.5;

        const numberOfNotebooksBought: number = 5;
        const numberOfBallpenBought: number = 1;

        let totalNotebookPrice: number = notebookPrice * numberOfNotebooksBought;
        let totalBallpenPrice: number = ballpenPrice * numberOfBallpenBought;

        let totalSpent: number = totalNotebookPrice + totalBallpenPrice;

        return totalSpent;
}
