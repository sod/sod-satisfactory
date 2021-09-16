import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IconDefinition} from '@ant-design/icons-angular';
import {
    ArrowRightOutline,
    BuildOutline,
    CheckCircleOutline,
    ClockCircleOutline,
    CloseCircleOutline,
    DeleteOutline,
    EditOutline,
    MinusSquareOutline,
    PlusOutline,
    SearchOutline,
} from '@ant-design/icons-angular/icons';
import {NzAutocompleteModule} from 'ng-zorro-antd/auto-complete';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';

const modules = [
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzPageHeaderModule,
    NzInputNumberModule,
    NzCardModule,
    NzDividerModule,
    NzAutocompleteModule,
    NzTableModule,
    NzToolTipModule,
];
export const ngZorroIcons: IconDefinition[] = [
    PlusOutline,
    DeleteOutline,
    EditOutline,
    CheckCircleOutline,
    CloseCircleOutline,
    ArrowRightOutline,
    BuildOutline,
    MinusSquareOutline,
    ClockCircleOutline,
    SearchOutline,
];

@NgModule({
    declarations: [],
    imports: [CommonModule, ...modules],
    exports: [...modules],
})
export class SharedNgZorroModule {}
