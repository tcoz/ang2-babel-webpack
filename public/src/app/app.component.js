import {Component} from '@angular/core';

class AppComponent {
    constructor () {}
}

AppComponent.annotations = [

    new Component({
        selector: "app-tcoz",
        templateUrl: './app/app.component.html',
        styleUrls: [ './app/app-style.css' ]
    })
];

export {AppComponent};