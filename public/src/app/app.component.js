import {Component} from '@angular/core';

class AppComponent {
    constructor () {}
}

AppComponent.annotations = [

    new Component({
        selector: "my-app",
        templateUrl: './app.component.html',
        styleUrls: [ './app-style.css' ]
    })
];

export {AppComponent};