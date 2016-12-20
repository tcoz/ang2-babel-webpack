import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

class AppModule {
    constructor() {}
}

AppModule.annotations = [
    new NgModule({
        declarations: [
            AppComponent,
        ],
        imports: [
            BrowserModule,
        ],
        providers: [ ],
        bootstrap: [ AppComponent ]
    })
];

export {AppModule}