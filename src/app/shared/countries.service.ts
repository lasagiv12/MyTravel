import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countries$: Observable<any[]>
  countriesSavedList: any[];

  getCountry(countryName) {
    return this.http.get<any[]>("https://restcountries.eu/rest/v2/name/"+countryName)
  }

  constructor(private http: HttpClient) { 
    http.get<Observable<any[]>>("https://restcountries.eu/rest/v2/all").subscribe(countries => {
      this.countries$ = countries;
      if(JSON.parse(localStorage.getItem('countries'))){
        this.countriesSavedList = JSON.parse(localStorage.getItem('countries'))
      } else {
        this.countriesSavedList = new Array();
      }
    })
  }
  
}
