export function updateInArray<T>(array: T[], item: T, updateFn: (item: Readonly<T>) => T): T[] {
    const index = array.indexOf(item);

    if (index < 0) {
        return array;
    }

    const copy = array.slice();
    copy.splice(index, 1, updateFn(item));

    return copy;
}
