import {registerLocaleData} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import en from '@angular/common/locales/en';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {NavigationActionTiming, routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {metaReducers, reducers} from './reducers';
import {SharedModule} from './shared/shared.module';
import {FlatRouterSerializer} from './shared/store/router/flat-router-serializer';

registerLocaleData(en);

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, {metaReducers}),
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router',
            serializer: FlatRouterSerializer,
            navigationActionTiming: NavigationActionTiming.PostActivation,
        }),
        StoreModule.forFeature('router', routerReducer),
        EffectsModule.forRoot(),
        SharedModule,
        !environment.production ? StoreDevtoolsModule.instrument({connectInZone: true}) : [],
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
