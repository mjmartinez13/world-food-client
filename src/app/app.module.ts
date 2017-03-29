import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { WorldMapComponent } from './world-map/world-map.component';
import { HomeComponent } from './home/home.component';

import { CountryService } from './country.service';
import { CountryViewComponent } from './country-view/country-view.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CountriesComponent } from './countries/countries.component';


@NgModule({
  declarations: [
    AppComponent,
    WorldMapComponent,
    HomeComponent,
    CountryViewComponent,
    AboutUsComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
