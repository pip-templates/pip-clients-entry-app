import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ShellModule } from 'pip-clients-shell';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
    PipAppbarModule,
    PipMainLayoutAltModule,
    PipRootLayoutModule,
    PipShadowModule,
} from 'pip-webui2-layouts';
import {
    PipBreadcrumbModule,
    PipNavIconModule
} from 'pip-webui2-nav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipEntryModule } from './entry/index';
import { environment } from '../environments/environment';
import { PipThemesModule } from 'pip-webui2-themes';

@NgModule({
    imports: [
        // Angular and vendors
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
        TranslateModule,
        // pip-suite2 & pip-webui2
        PipAppbarModule,
        PipBreadcrumbModule,
        PipMainLayoutAltModule,
        PipNavIconModule,
        PipRootLayoutModule,
        PipShadowModule,
        // pip-clients
        ShellModule.forMock(),
        // application modules
        AppRoutingModule,
        PipEntryModule
    ],
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
