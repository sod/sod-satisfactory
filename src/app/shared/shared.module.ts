import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './store/app/app.effects';

@NgModule({
    declarations: [],
    imports: [CommonModule, EffectsModule.forFeature([AppEffects])],
})
export class SharedModule {}
