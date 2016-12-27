import { Component } from '@angular/core';

class InputComponent {
    constructor () {
    }
}

InputComponent.annotations = [
    new Component ( {
        selector: 'tcoz-testcomp',
        templateUrl: './flair/samplecomponent/sample.component.html',
        styleUrls: [ './flair/samplecomponent/sample.component.css' ],
        inputs: [
            'receivedChildVal'
        ]
    } )
];
export { InputComponent }