import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Intro1Component} from "./pages/introduction/intro1/intro1.component";
import {Intro2Component} from "./pages/introduction/intro2/intro2.component";
import {Method1Component} from "./pages/methods/method1/method1.component";
import {Method2Component} from "./pages/methods/method2/method2.component";
import {Method3Component} from "./pages/methods/method3/method3.component";
import {Enhan1Component} from "./pages/enhancement/enhan1/enhan1.component";
import {Enhan2Component} from "./pages/enhancement/enhan2/enhan2.component";

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
    {
        path: 'method1',
        component: Method1Component,
    },
    {
        path: 'method2',
        component: Method2Component,
    },
    {
        path: 'method3',
        component: Method3Component,
    },
    {
        path: 'enhan1',
        component: Enhan1Component,
    },
    {
        path: 'enhan2',
        component: Enhan2Component,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
