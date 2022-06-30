import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {API_BASE_URL} from '@nx-with-chau-tran/web/shared-data-access-api-sdk';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {WebShellModule} from '@nx-with-chau-tran/web/shell/feature';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule,HttpClientModule, WebShellModule],
  providers: [{provide: API_BASE_URL, useValue: environment.apiBaseUrl}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
