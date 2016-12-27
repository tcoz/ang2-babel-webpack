import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FlairModule } from '../flair/flair.module';

class ViewsModule {
    constructor() {}
}

ViewsModule.annotations = [
    new NgModule ( {
        declarations: [ HomeComponent ],
        imports: [ FlairModule ],
        exports: [ FlairModule ],
        services: [ ]
    })
];

export { ViewsModule };