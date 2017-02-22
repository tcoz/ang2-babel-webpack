import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewsModule } from '../views/views-module';
import { SampleService } from '../services/sample.service';

class AppModule {
    constructor() {}
}

/**
 * Note we add the LocationStrategy/HashLocationStrategy provider to avoid problems
 * with HTML5 urls (which in many contexts don't work).
 * This provider uses "old" hashtag URLs (which work everywhere).
 */

AppModule.annotations = [
    new NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            ViewsModule
        ],
        providers: [
            { provide: LocationStrategy, useClass: HashLocationStrategy },
            SampleService
        ],
        exports: [ AppRoutingModule ],
        bootstrap: [ AppComponent ]
    })
];

export { AppModule }