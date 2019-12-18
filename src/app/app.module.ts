import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarModule } from 'ng-responsive-navbar';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ImpressumModule } from 'german-impressum';
import { DisclaimerModule } from 'german-legal-disclaimer';
import { NgQAndAModule } from 'ng-q-and-a';
import { QAndAComponent } from './q-and-a/q-and-a.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    QAndAComponent
  ],
  imports: [
    NgQAndAModule,
    ImpressumModule,
    DisclaimerModule,
    NavbarModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
