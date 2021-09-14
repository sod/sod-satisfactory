import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IconDefinition} from '@ant-design/icons-angular';
import {PlusOutline} from '@ant-design/icons-angular/icons';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';

const modules = [NzButtonModule, NzIconModule];
export const ngZorroIcons: IconDefinition[] = [PlusOutline];

@NgModule({
    declarations: [],
    imports: [CommonModule, ...modules],
    exports: [...modules],
})
export class SharedNgZorroModule {}
