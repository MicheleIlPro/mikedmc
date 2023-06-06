import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footers/footer/footer.component';
import { HeaderComponent } from './headers/header/header.component';
import { RandomImageComponent } from './extra/random-image/random-image.component';
import { HomeComponent } from './mains/home/home.component';
import { NullaComponent } from './mains/nulla/nulla.component';
import { ServerComponent } from './mains/server/server.component';
import { BotsComponent } from './mains/bots/bots.component';
import { ErrorComponent } from './extra/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    RandomImageComponent,
    HomeComponent,
    NullaComponent,
    ServerComponent,
    BotsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
