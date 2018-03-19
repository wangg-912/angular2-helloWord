import "reflect-metadata";
import "zone.js"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./src/app.module";

platformBrowserDynamic().bootstrapModule(AppModule).catch(err=>console.log(err));