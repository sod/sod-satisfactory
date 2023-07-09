import {Directive, HostBinding} from '@angular/core';

let id = 1;

@Directive({
    selector: '[appInputControl]',
})
export class InputControlDirective {
    @HostBinding('class.form-control') formControlClass = true;
    @HostBinding('attr.id') id = `app-input-${++id}`;
    @HostBinding('attr.placeholder') placeholder = ' ';
}
