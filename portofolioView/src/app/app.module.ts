import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FirstScreenComponent } from './components/home/first-screen/first-screen.component';
import { MenuComponent } from './components/general/menu/menu.component';
import { DeluxeRewardsComponent } from './components/portfolios/deluxe-rewards/deluxe-rewards.component';
import { EquilibreEngenhariaPortfolioComponent } from './components/portfolios/equilibre-engenharia-portfolio/equilibre-engenharia-portfolio.component';
import { PersonalPortfolioComponent } from './components/portfolios/personal-portfolio/personal-portfolio.component';
import { EventManagerComponent } from './components/portfolios/event-manager/event-manager.component';
import { FormComponent } from './components/first-screen/contact/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstScreenComponent,
    MenuComponent,
    DeluxeRewardsComponent,
    EquilibreEngenhariaPortfolioComponent,
    PersonalPortfolioComponent,
    EventManagerComponent,
    FormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
