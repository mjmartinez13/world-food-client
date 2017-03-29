import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit ():any {


    $('#hero-section').vegas({
      delay: 7000,
      slides: [
          // { src: "./assets/img/hero3.jpg" },
          { src: "./assets/img/hero-8.jpg" }
      ],
      init: function (globalSettings) {
       console.log("Init");
     },
     play: function (index, slideSettings) {
       console.log("Play");
     },
     animation: [ 'kenburnsUp' ]
   });

  

  }

}
