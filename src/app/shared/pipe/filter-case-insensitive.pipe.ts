import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterCaseInsensitive',
})
export class FilterCaseInsensitivePipe implements PipeTransform {
    transform<T>(
        haystack: T[],
        needle: unknown,
        matchesFuzzy: (value: T) => string = (value) => String(value),
        matchesPerfect: (value: T) => string[] = (value) => [String(value)],
    ): T[] {
        const limit = 15;
        let needles: string[] | undefined;
        let perfectNeedle: string | undefined;

        if (needle && typeof needle === 'string') {
            perfectNeedle = needle.toLowerCase();
            needles = perfectNeedle.trim().split(/ +/);
        }

        if (needles && perfectNeedle) {
            const perfectNeedleResult = haystack
                .filter((option) => {
                    return matchesPerfect(option)
                        .map((x) => `${x?.toLowerCase?.() || ''}`)
                        .includes(perfectNeedle!);
                })
                .slice(0, limit);

            if (perfectNeedleResult.length) {
                return perfectNeedleResult;
            }

            return haystack
                .filter((option) => {
                    const hay = matchesFuzzy(option).toLowerCase();
                    return needles!.every((needle) => hay.indexOf(needle) !== -1);
                })
                .slice(0, limit);
        }

        return haystack.slice(0, limit);
    }
}
