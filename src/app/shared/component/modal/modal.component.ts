import {Component, Input, TemplateRef} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    @Input({required: true}) content!: TemplateRef<any>;
    @Input() active$: BehaviorSubject<any> | Observable<any> = new BehaviorSubject(true);

    close(): void {
        if (this.active$ instanceof BehaviorSubject) {
            this.active$.next(false);
        }
    }
}
