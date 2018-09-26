import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppWarningAlertComponent } from '../app-warning-alert/warning-alert.component';
import { AppSuccessAlertComponent } from './app-success-alert/app-success-alert.component';


@NgModule({
  declarations: [
    AppComponent,
    AppWarningAlertComponent,
    AppSuccessAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
