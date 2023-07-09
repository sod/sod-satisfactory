import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterCaseInsensitive',
})
export class FilterCaseInsensitivePipe implements PipeTransform {
    transform<T>(haystack: T[], needle: unknown, toString: (value: T) => string = (value) => String(value)): T[] {
        const limit = 30;
        let needles: string[] | undefined;
        let perfectNeedle: string | undefined;

        if (needle && typeof needle === 'string') {
            perfectNeedle = needle.toLowerCase();
            needles = perfectNeedle.trim().split(/ +/);
        }

        if (needles && perfectNeedle) {
            console.log(haystack);
            const perfectMatch = haystack.find((option) => perfectNeedle === toString(option).toLowerCase());
            console.log(perfectMatch);
            if (perfectMatch) {
                needles = [perfectNeedle];
            }

            return haystack
                .filter((option) => {
                    const hay = toString(option).toLowerCase();
                    return needles!.every((needle) => hay.indexOf(needle) !== -1);
                })
                .slice(0, limit);
        }

        return haystack.slice(0, limit);
    }
}
