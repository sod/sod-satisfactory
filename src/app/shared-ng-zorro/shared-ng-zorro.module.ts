import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IconDefinition} from '@ant-design/icons-angular';
import {CheckCircleOutline, CloseCircleOutline, DeleteOutline, EditOutline, PlusOutline} from '@ant-design/icons-angular/icons';
import {NzAutocompleteModule} from 'ng-zorro-antd/auto-complete';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {NzTableModule} from 'ng-zorro-antd/table';

const modules = [
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NzCardModule,
    NzDividerModule,
    NzAutocompleteModule,
    NzTableModule,
];
export const ngZorroIcons: IconDefinition[] = [PlusOutline, DeleteOutline, EditOutline, CheckCircleOutline, CloseCircleOutline];

@NgModule({
    declarations: [],
    imports: [CommonModule, ...modules],
    exports: [...modules],
})
export class SharedNgZorroModule {}
