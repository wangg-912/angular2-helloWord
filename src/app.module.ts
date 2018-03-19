import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";


@NgModule({
    declarations:[AppComponent],
    exports:[BrowserModule],
    bootstrap:[AppComponent]
})

export class AppModule{ }