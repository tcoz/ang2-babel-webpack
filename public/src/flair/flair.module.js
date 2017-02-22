import { NgModule } from '@angular/core';
import { SampleComponent } from './samplecomponent/sample.component';

class FlairModule {
    constructor ( ) {}
}

FlairModule.annotations = [
    new NgModule ( {
        declarations: [ SampleComponent ],
        exports: [ SampleComponent ]
    } )
];
export { FlairModule }
