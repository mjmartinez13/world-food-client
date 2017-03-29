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
    setTimeout(() => {
      $('.col-1').addClass('animated fadeIn');
      $('.col-1').css('opacity', '1');
    }, 200);

    setTimeout(() => {
      $('.col-2').addClass('animated fadeIn');
      $('.col-2').css('opacity', '1');
    }, 600);

    setTimeout(() => {
      $('.col-3').addClass('animated fadeIn');
      $('.col-3').css('opacity', '1');
    }, 1000);

  }

}
