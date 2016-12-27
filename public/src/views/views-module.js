import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

class ViewsModule {
    constructor() {}
}

ViewsModule.annotations = [
    new NgModule ( {
        declarations: [ HomeComponent ]
    })
];

export { ViewsModule };