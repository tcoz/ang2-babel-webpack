import { Component } from '@angular/core';

class HomeComponent {
    constructor() {}
}

HomeComponent.annotations = [
    new Component ( {
       templateUrl: '../views/home/home.component.html'
    } )
];

export { HomeComponent }
