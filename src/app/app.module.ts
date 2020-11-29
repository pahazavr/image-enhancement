import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {TocComponent} from "./custom/toc/toc.component";
import {MatTreeModule} from "@angular/material/tree";
import {MatButtonModule} from "@angular/material/button";
import {IntroductionModule} from "./pages/introduction/introduction.module";

@NgModule({
    declarations: [
        AppComponent,
        TocComponent,
    ],
    exports: [
        MatSidenavModule,
        MatTreeModule,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatTreeModule,
        MatButtonModule,
        IntroductionModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
