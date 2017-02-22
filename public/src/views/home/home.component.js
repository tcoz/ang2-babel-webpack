import { Component } from '@angular/core';

class HomeComponent {
}

HomeComponent.annotations = [
    new Component ( {
       templateUrl: require ( './home.component.html' )
    } )
];

export { HomeComponent }
