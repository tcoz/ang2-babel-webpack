import { Component, EventEmitter } from '@angular/core';
import { AppConfig } from '../../app/app.config';

class InputComponent {
    constructor () {
    }

    onBtnClick () {
        this.valueChange = new EventEmitter ( ).emit ( {
            note: AppConfig.Notifications.TEST_NOTE,
            data: 'Here is the emitted data'
        });
    }
}

InputComponent.annotations = [
    new Component ( {
        selector: 'tcoz-testcomp',
        templateUrl: './flair/samplecomponent/sample.component.html',
        styleUrls: [ './flair/samplecomponent/sample.component.css' ],
        inputs: [
            'receivedChildVal'
        ],
        outputs: [
            'valueChange'
        ],
    } )
];
export { InputComponent }