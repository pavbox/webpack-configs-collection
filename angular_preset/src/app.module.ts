import './rxjs-extensions';
import {NgModule, ErrorHandler}      from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';
import {Ng2BootstrapModule} from 'ng2-bootstrap';
import {APP_BASE_HREF} from '@angular/common';

// import { ModalModule, TypeaheadModule } from 'ng2-bootstrap/ng2-bootstrap';
// import { ComponentLoaderFactory } from 'ng2-bootstrap/component-loader';

// Imports for loading & configuring the in-memory web api
import {AppComponent}   from './components/app.component';
import {routing} from './app.routing';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        Ng2BootstrapModule,
        routing
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
    providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
    ]
})

export class AppModule {
}
