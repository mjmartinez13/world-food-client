import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.sass']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let greenLogo = $('.logo-green');
    let blueLogo = $('.logo-blue');
    let pinkLogo = $('.logo-pink');

    setTimeout(() => {
      greenLogo.addClass('animated fadeIn');
    }, 1000);
    setTimeout(() => {
      blueLogo.addClass('animated fadeIn');
    }, 2000);
    setTimeout(() => {
      pinkLogo.addClass('animated fadeIn');
    }, 3000);
    setTimeout(() => {
      $('.logo-text').addClass('animated fadeIn');
    }, 4000)

    setTimeout(() => {
      $('.logo-text').addClass('animated fadeOut');
    }, 7000)

    setTimeout(() => {
      greenLogo.addClass('logo-green-position');
      blueLogo.addClass('logo-blue-position');
      pinkLogo.addClass('logo-pink-position');
    }, 9000)

    setTimeout(() => {
      $('.green-text').addClass('animated fadeIn');
      $('.pink-text').addClass('animated fadeIn');
      $('.blue-text').addClass('animated fadeIn');
    }, 11000)

  }

}
