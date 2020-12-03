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
import {MethodsModule} from "./pages/methods/methods.module";
import {EnhanModule} from "./pages/enhancement/enhan.module";
import {ActualityComponent} from "./pages/actuality/actuality.component";
import {MatListModule} from "@angular/material/list";

@NgModule({
    declarations: [
        AppComponent,
        TocComponent,
        ActualityComponent
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
        IntroductionModule,
        MethodsModule,
        EnhanModule,
        MatListModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
