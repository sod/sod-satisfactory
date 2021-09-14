export function removeFromArray<T>(array: T[], item: T): T[] {
    const index = array.indexOf(item);

    if (index < 0) {
        return array;
    }

    const copy = array.slice();
    copy.splice(index, 1);

    return copy;
}
