import { Injectable } from '@angular/core';
import { Http } from  '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';

declare var jQuery: any;
declare var $: any;


@Injectable()
export class CountryService {
  // BASE_URL: string = '';
  BASE_URL: string = 'http://localhost:3000';

  constructor(
    private myHttp: Http,
    private myRoute: ActivatedRoute,
    private myNavigator: Router
  ) { }

  getList() {
    const thePromise = this.myHttp.get(`${this.BASE_URL}/api/country`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
    return thePromise;



  }

  get(id) {
  return this.myHttp.get(`${this.BASE_URL}/api/country/${id}`)
  .toPromise()
  .then(apiResponse => apiResponse.json())
}

}
