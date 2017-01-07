// NOT FINAL AT ALL this is working code if used as a component with a template that has the indicated elements.
/*

import { Component, ngOnInit, ViewChild } from '@angular/core';

class DebounceComponent {
    constructor( ) {}

    ngOnInit ( ) {
        let inputBox = this.testinputref.nativeElement;
        let displayDiv = this.displaydivref.nativeElement;

        let source = Rx.Observable.fromEvent ( inputBox, 'keyup' )
            .map ( ( x ) => { return x.currentTarget.value; } )
            .debounce ( ( x ) => { return Rx.Observable.timer ( 1000 ); } );

        source.subscribe (
            ( x ) => { displayDiv.innerText = x; },
            ( err ) => { console.error ( 'Error: %s', err ) },
            () => {} );
    }
}

DebounceComponent.annotations = [
    new Component ( {
        templateUrl: './views/home/home.component.html',
        queries: { 'testinputref': new ViewChild ( 'testinput' ),
            'displaydivref': new ViewChild ( 'display' ) }
    } )
];

export { DebounceComponent }

*/
