import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeader } from './header/app.header';
import { Appfooter } from './footer/app.footer';
import { Appproduct } from './product/app.product';
import { AppHome } from './Home/app.Home';
import { AppPortfolio } from './Portfolio/app.Portfolio';
import { AppServices } from './Serivces/app.Services';
import { AppContact } from './Contact/app.Contact';
import { AppAbout } from './About/app.About';



@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    Appfooter,
    Appproduct,
    AppHome,
    AppPortfolio,
    AppServices,
    AppContact,
    AppAbout

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
