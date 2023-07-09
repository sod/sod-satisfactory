import {Component, ContentChild, HostBinding, Input} from '@angular/core';
import {InputControlDirective} from '../../directive/input-control.directive';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent {
    @HostBinding('class.form-floating') formFloatingClass = true;
    @HostBinding('class.d-block') dBlockClass = true;
    @ContentChild(InputControlDirective) inputControl!: InputControlDirective;
    @Input() public label?: string;
}
