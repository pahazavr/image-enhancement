import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {Intro1Component} from "./intro1/intro1.component";
import {Intro2Component} from "./intro2/intro2.component";

@NgModule({
    declarations: [
        Intro1Component,
        Intro2Component,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
    ],
    providers: [],
})
export class IntroductionModule {
}
