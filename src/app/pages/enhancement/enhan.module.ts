import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {Enhan1Component} from "./enhan1/enhan1.component";
import {Enhan2Component} from "./enhan2/enhan2.component";

@NgModule({
    declarations: [
        Enhan1Component,
        Enhan2Component,
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
})
export class EnhanModule {
}
