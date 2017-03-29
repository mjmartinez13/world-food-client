import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { WorldMapComponent } from './world-map/world-map.component';

import { HomeComponent } from './home/home.component';

import { CountryViewComponent } from './country-view/country-view.component';
// import { AppComponent } from './app.component';

import { AboutUsComponent } from './about-us/about-us.component';

import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'map',
    component: WorldMapComponent
  },
  {
    path: 'features',
    component: AboutUsComponent
  },
  {
    path: 'map/country/:id',
    component: CountryViewComponent
  },
  {
    path: 'countries',
    component: CountriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
