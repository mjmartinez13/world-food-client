import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    setTimeout(()=> {
      $('h1').addClass('animated fadeIn');
    },500);

    setTimeout(()=> {
      $('.form-container').addClass('animated bounceInLeft');
      $('.form-container').css('opacity', '1');
    },1000);

  }

}
