// Recompilation count: 0
export function formatTheDateDInto_050435({ d }: {
    d: Date;
}): string {
    // Format the date 'd' into a specific string format.
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    return new Intl.DateTimeFormat('en-US', options).format(d);
}
