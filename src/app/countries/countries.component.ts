import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

import 'rxjs/add/operator/toPromise';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.sass']
})
export class CountriesComponent implements OnInit {

  constructor(private myCountryService: CountryService) { }

  countries: Array<Object>;
  errorMessage: string = '';

  country: Object;

  ngOnInit() {

    this.myCountryService.getList()
      .then((countryList) => {
        this.countries = countryList;})
      .catch((err) => {
        this.errorMessage = 'There was an error. Try again later.';
      });
  }

}
