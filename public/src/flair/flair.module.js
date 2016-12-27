import { NgModule } from '@angular/core';
import { InputComponent } from './samplecomponent/sample.component';

class FlairModule {
    constructor ( ) {}
}

FlairModule.annotations = [
    new NgModule ( {
        declarations: [ InputComponent ],
        imports: [],
        exports: [ InputComponent ]
    } )
];
export { FlairModule }
