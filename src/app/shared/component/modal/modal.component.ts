import {Component, Input, TemplateRef} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    @Input({required: true}) content!: TemplateRef<unknown>;
    @Input() active$: BehaviorSubject<boolean> = new BehaviorSubject(true);
}
