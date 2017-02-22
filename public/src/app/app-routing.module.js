import { NgModule }         from '@angular/core';
import { RouterModule }     from '@angular/router';
import { HomeComponent }    from '../views/home/home.component';
import { PageNotFoundComponent } from './pagenotfound-component';

const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: '**',   component: PageNotFoundComponent }
];

class AppRoutingModule {
    constructor() {}
}

AppRoutingModule.annotations = [
    new NgModule({
        declarations: [ PageNotFoundComponent ],
        imports: [ RouterModule.forRoot(routes) ],
        exports: [ RouterModule ]
    })
];

export { AppRoutingModule }
