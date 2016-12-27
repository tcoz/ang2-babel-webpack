import { Component } from '@angular/core';
import { AppConfig } from '../../app/app.config';

class HomeComponent {
    constructor() {
        this.test_val = AppConfig.Globals.TEST_VAL;
        this.pass_to_child_val = 'The children they just do not listen!';
    }
}

HomeComponent.annotations = [
    new Component ( {
       templateUrl: './views/home/home.component.html'
    } )
];

export { HomeComponent }
