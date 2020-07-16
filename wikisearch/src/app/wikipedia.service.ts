import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/*
1. Services are used to fetch/store/update any kind of data in our app.
2. Data flows from a service to a component.
3. Services are implemented as classes
4. Angular will auto create a single instance of each service for us

*/
@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor( private http: HttpClient ) { 
   // this.httpClient = new HttpClient() ;
   }

  search(term: string){
   // return 'I am wiki search result';
    return this.http.get('https://en.wikipedia.org/w/api.php',  {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    });
  }
} 