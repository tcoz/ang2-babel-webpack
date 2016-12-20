import {Component} from '@angular/core';

class AppComponent {
    constructor () {}
}

AppComponent.annotations = [
    new Component({
        selector: "my-app",
        template: '<h1>My First Angular 2 A DUH</h1>'
    })
];

export {AppComponent};