import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterCaseInsensitive',
})
export class FilterCaseInsensitivePipe implements PipeTransform {
    transform<T>(haystack: T[], needle: unknown, toString: (value: T) => string = (value) => String(value)): T[] {
        const limit = 30;
        const needles = needle && typeof needle === 'string' ? needle.toLowerCase().trim().split(/ +/) : undefined;

        if (!needles) {
            return haystack.slice(0, limit);
        }

        return haystack
            .filter((option) => {
                const hay = toString(option).toLowerCase();
                return needles.every((needle) => hay.indexOf(needle) !== -1);
            })
            .slice(0, limit);
    }
}
