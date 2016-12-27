import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewsModule } from '../views/views-module';

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
            AppRoutingModule,
            ViewsModule
        ],
        providers: [ ],
        exports: [ AppRoutingModule ],
        bootstrap: [ AppComponent ]
    })
];

export { AppModule }