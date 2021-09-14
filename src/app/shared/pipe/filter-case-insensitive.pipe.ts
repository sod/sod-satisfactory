import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterCaseInsensitive',
})
export class FilterCaseInsensitivePipe implements PipeTransform {
    transform(haystack: string[], needle?: unknown): string[] {
        return needle && typeof needle === 'string'
            ? haystack.filter((option) => option.toLowerCase().indexOf(needle.toLowerCase()) !== -1)
            : haystack;
    }
}
