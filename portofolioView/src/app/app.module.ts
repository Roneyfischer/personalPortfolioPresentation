import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FirstScreenComponent } from './components/home/first-screen/first-screen.component';
import { MenuComponent } from './components/general/menu/menu.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FirstScreenComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
