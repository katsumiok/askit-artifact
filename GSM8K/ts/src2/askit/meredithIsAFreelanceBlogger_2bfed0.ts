// Recompilation count: 0
export function meredithIsAFreelanceBlogger_2bfed0({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Meredith is a freelance blogger who writes about health topics and submits to clients each day as her permanent job. A blog article takes an average of 'x1' hours to research and write about. Last week, she wrote 'x2' articles on Monday and  2/5 times more articles on Tuesday than on Monday. On Wednesday, she wrote twice the number of articles she wrote on Tuesday. Calculate the total number of hours she spent writing articles in the three days.

    const mondayArticles = x2;
    const tuesdayArticles = x2 + (2/5 * x2);
    const wednesdayArticles = 2 * tuesdayArticles;

    const totalHours = x1 * (mondayArticles + tuesdayArticles + wednesdayArticles);

    return totalHours;
}
