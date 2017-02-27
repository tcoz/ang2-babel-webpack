import { Component } from '@angular/core';
import { SampleService } from '../../services/sample.service';

class SampleComponent {
    static get parameters ( ) {
        return [ SampleService ];
    }

    constructor ( sampleService ) {
        this.sampleSvc = sampleService;
    }

    get sampleValue ( ) {
        return this.sampleSvc.sampleValue;
    }
}

SampleComponent.annotations = [
    new Component ( {
        selector: 'sample-component',
        templateUrl: require ( './sample.component.html' )
    } )
];
export { SampleComponent }