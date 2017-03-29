import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CountryService } from '../country.service';

import 'rxjs/add/operator/toPromise';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.sass']
})
export class CountryViewComponent implements OnInit {

  country: Object;
  errorMessage: string = '';

  constructor(
    private myRoute: ActivatedRoute,
    private myCountryService: CountryService,
    private myNavigator: Router
  ) { }

  ngOnInit() {
    this.myRoute.params.subscribe((params) => {
    this.countryView(params['id']);
    });


    setTimeout(function(){
      $('.loading-text').addClass('animated fadeIn');
    }, 1000);

    setTimeout(function(){
      $('.loading-text').removeClass('animated fadeIn');
      $('.loading-text').addClass('animated fadeOut');
    }, 2000);

    setTimeout(function(){
      $('.loading-text').removeClass('animated fadeOut');
      $('.loading-text').addClass('animated fadeIn');
    }, 3000);


    setTimeout(function(){
      $('.loading-text').removeClass('animated fadeIn');
      $('.loading-text').addClass('animated fadeOut');
    }, 4000);

    setTimeout(function(){
      $('.loading-text').removeClass('animated fadeOut');
      $('.loading-text').addClass('animated fadeIn');
    }, 5000);

    setTimeout(function(){
      $('.loading-text-container i').addClass('animated fadeIn')
      $('.loading-img').fadeOut(200);
    }, 7000);


    setTimeout(function(){
      $('#loading-screen').fadeOut(400);
    },9000);


    setTimeout(function(){$('.food-1-container').addClass('animated bounceInLeft'); $('.food-1-container').css('opacity', '1') }, 10000);

    setTimeout(function(){ $('.food-2-container').addClass('animated bounceInLeft'); $('.food-2-container').css('opacity', '1')  }, 11000);

    setTimeout(function(){ $('.food-3-container').addClass('animated bounceInLeft');$('.food-3-container').css('opacity', '1')  }, 12000);

    setTimeout(function(){ $('.goback').addClass('animated bounceIn'); }, 13000);


  }

commentOne() {
  $('.comment-container-1').fadeIn();
}
commentTwo() {
  $('.comment-container-2').fadeIn();
}
commentThree() {
  $('.comment-container-3').fadeIn();
}

exitComment() {
  $('.comment-container-1').fadeOut();
  $('.comment-container-2').fadeOut();
  $('.comment-container-3').fadeOut();
}
  exit() {
    let foodOne = $('.food-1-container');
    let foodTwo = $('.food-2-container');
    let foodThree = $('.food-3-container');

    $('.recipe-container').fadeOut(100);

    if (foodTwo.hasClass('fadeOut')) {
        foodTwo.removeClass('fadeOut');
        foodTwo.addClass('fadeIn');
    }
     if (foodThree.hasClass('fadeOut')) {
         foodThree.removeClass('fadeOut');
         foodThree.addClass('fadeIn')
    }
    if (foodOne.hasClass('fadeOut')) {
        foodOne.removeClass('fadeOut');
        foodOne.addClass('fadeIn')
   }

   if ($('.recipe-container-2').hasClass('container-2-position')) {
      $('.recipe-container-2').removeClass('container-2-position');
       $('.food-2-container').removeClass('food-2-position');
   }

  }

  recipeOne() {
    $('.food-2-container').addClass('animated fadeOut');
    $('.food-3-container').addClass('animated fadeOut');

    $('.recipe-container-1').fadeIn(100);
    $('.recipe-container-1').addClass('food-1-position');

    $('.food-1-container').addClass('food-1-first');

    setTimeout(function() {
      $('.recipe-btn').addClass('animated fadeIn');
      $('.youtube-col').addClass('animated fadeIn');
    }, 1000);

    setTimeout(function() {
      $('.location-container').addClass('animated fadeIn')
    }, 1000);
  }


  recipeTwo() {
    $('.food-1-container').addClass('animated fadeOut');
    $('.food-3-container').addClass('animated fadeOut');

    $('.recipe-container-2').fadeIn(100);
    $('.recipe-container-2').addClass('container-2-position');
    $('.food-2-container').addClass('food-2-position');
    setTimeout(function() {
      $('.recipe-btn').addClass('animated fadeIn');
      $('.youtube-col').addClass('animated fadeIn');
    }, 1000);

    setTimeout(function() {
      $('.location-container').addClass('animated fadeIn')
    }, 1000);
  }


  recipeThree() {
    $('.food-1-container').addClass('animated fadeOut');
    $('.food-2-container').addClass('animated fadeOut');

    $('.recipe-container-3').fadeIn(100);

    $('.recipe-container-3').addClass('food-3-position');

    setTimeout(function() {
      $('.recipe-btn').addClass('animated fadeIn');
      $('.youtube-col').addClass('animated fadeIn');
    }, 1000);

    setTimeout(function() {
      $('.location-container').addClass('animated fadeIn')
    }, 1000);
  }


  countryView(id) {
    this.myCountryService.get(id)
      .then((countryDetail) => {
        this.country = countryDetail;
        console.log(this.country);
      })
      .catch((err) => {
        this.errorMessage = 'Could not retrieve phone details. Try again later.';
      });

  }




}
