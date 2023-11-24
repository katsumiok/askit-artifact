// Recompilation count: 0
export function peytonScheduledAfterWorkActivities_bf32ed({}: {}): number {
    // Monday's yoga class - 1 hour
    let yogaClass = 1;

    // Tuesday's cooking class lasts three times as long as Monday’s yoga - 3 hours
    let cookingClass = 3 * yogaClass;

    // Wednesday's cheese-tasting event - 0.5 hour
    let cheeseTasting = 0.5;

    // Thursday's museum tour takes half as long as the cooking class - 1.5 hours
    let museumTour = cookingClass / 2;

    // Friday's errands - 2 hours
    let fridayErrands = 2;

    // Sum up all activities
    let totalHours = yogaClass + cookingClass + cheeseTasting + museumTour + fridayErrands;

    return totalHours;
}
