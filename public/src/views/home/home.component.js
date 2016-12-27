import { Component } from '@angular/core';
import { AppConfig } from '../../app/app.config';

class HomeComponent {
    constructor() {
        this.test_val = AppConfig.Globals.TEST_VAL;
    }
}

HomeComponent.annotations = [
    new Component ( {
       templateUrl: './views/home/home.component.html'
    } )
];

export { HomeComponent }
