import {registerLocaleData} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import en from '@angular/common/locales/en';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {metaReducers, reducers} from './reducers';
import {SharedModule} from './shared/shared.module';

registerLocaleData(en);

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(reducers, {metaReducers}),
        EffectsModule.forRoot(),
        SharedModule,
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
    providers: [{provide: NZ_I18N, useValue: en_US}],
    bootstrap: [AppComponent],
})
export class AppModule {}
