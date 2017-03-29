import { Component, OnInit  } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app works!';

ngOnInit() {
  $('.toggle-nav').click( () => {
    $('#navegation').slideToggle(500);
    if ( $('.toggle-nav > i').hasClass('ion-android-arrow-dropdown-circle')) {
      $('.toggle-nav i').addClass('ion-android-arrow-dropup-circle');
      $('.toggle-nav i').removeClass('ion-android-arrow-dropdown-circle');
    }else {
      $('.toggle-nav i').removeClass('ion-android-arrow-dropup-circle');
      $('.toggle-nav i').addClass('ion-android-arrow-dropdown-circle');
    }
  });

  $('.navegation-menu a').click( () => {
    $('#navegation').fadeOut(300);
    $('.toggle-nav i').removeClass('ion-android-arrow-dropup-circle');
    $('.toggle-nav i').addClass('ion-android-arrow-dropdown-circle');
  });



  $('.world-map').hover( ()=> {
     $('.world-map-i').slideToggle(300)
  }, () => {
     $('.world-map-i').hide(100)
  });

  $('.random').hover( ()=> {
     $('.random-i').slideToggle(300)
  }, () => {
     $('.random-i').hide(100)
  });

  $('.about').hover( ()=> {
     $('.aboutus-i').slideToggle(300)
  }, () => {
     $('.aboutus-i').hide(100)
  });

  $('.contact').hover( ()=> {
     $('.contact-i').slideToggle(300)
  }, () => {
     $('.contact-i').hide(100)
  });

  $('.home').hover( ()=> {
     $('.home-i').slideToggle(300)
  }, () => {
     $('.home-i').hide(100)
  });



  }

}
