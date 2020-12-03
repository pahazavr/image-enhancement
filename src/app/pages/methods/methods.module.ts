import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {Method1Component} from "./method1/method1.component";
import {Method2Component} from "./method2/method2.component";
import {Method3Component} from "./method3/method3.component";

@NgModule({
    declarations: [
        Method1Component,
        Method2Component,
        Method3Component,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule
    ],
    providers: [],
})
export class MethodsModule {
}
