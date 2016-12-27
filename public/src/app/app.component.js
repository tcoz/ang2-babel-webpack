import {Component} from '@angular/core';

class AppComponent {
    constructor () {}
}

AppComponent.annotations = [

    new Component({
        selector: "app-tcoz",
        templateUrl: './app.component.html',
        styleUrls: [ './app-style.css' ]
    })
];

export {AppComponent};