import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Intro1Component} from "./pages/introduction/intro1/intro1.component";
import {Intro2Component} from "./pages/introduction/intro2/intro2.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'intro1',
        pathMatch: 'full',
    },
    {
        path: 'intro1',
        component: Intro1Component,
    },
    {
        path: 'intro2',
        component: Intro2Component,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
