import { Component, OnInit } from '@angular/core';

import { CountryService } from '../country.service';

import 'rxjs/add/operator/toPromise';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.sass']
})
export class WorldMapComponent implements OnInit {

  countries: Array<Object>;
  errorMessage: string = '';

  country: Object;

  constructor(private myCountryService: CountryService) { }

    ngOnInit() {
      this.myCountryService.getList()
        .then((countryList) => {
          this.countries = countryList;})
        .catch((err) => {
          this.errorMessage = 'There was an error. Try again later.';
        });


        setTimeout(function(){
          $('.globe').css('opacity', '1')
          $('.globe').addClass('animated bounceInDown');
        }, 200);

          setTimeout(function(){
            $('.grass').addClass('animated slideInUp');
            $('.grass').css('opacity', '1');
          }, 1000);

          setTimeout(function(){
            $('.map-text').addClass('animated fadeIn');
            $('.map-text').css('opacity', '1');
          }, 2000);

          setTimeout(function(){
            $('button').addClass('animated slideInLeft');
            $('button').css('opacity', '1');
          }, 2000);

        }

    

  }
