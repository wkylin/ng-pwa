import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // ServiceWorkerModule.register('/ng-pwa/ngsw-worker.js', { enabled: environment.production }) // github page
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })  // dev
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
