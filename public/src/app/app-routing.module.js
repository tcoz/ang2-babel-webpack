import { NgModule }         from '@angular/core';
import { RouterModule }     from '@angular/router';
import { HomeComponent }    from "../views/home/home.component.js";

const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',   component: HomeComponent }
];

class AppRoutingModule {
    constructor() {}
}

AppRoutingModule.annotations = [
    new NgModule({
        imports: [ RouterModule.forRoot(routes) ],
        exports: [ RouterModule ]
    })
];

export { AppRoutingModule }
