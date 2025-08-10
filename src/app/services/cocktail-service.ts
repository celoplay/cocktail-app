import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IFilter } from '../models/filter.model';
import { first, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private URL_BASE = "https://www.thecocktaildb.com/api/json/v1/1/";
  private http = inject(HttpClient);

  getCocktails(filter:IFilter){
    
    let additionalURL = '';

    if (filter.searchBy == 'name') {
      additionalURL = 'search.php?s=';
    } else {
      additionalURL = 'filter.php?';
      if (filter.searchBy == 'glass') {
        additionalURL+='g=';
      } else if(filter.searchBy == 'category'){
        additionalURL+= 'c=';
      }else{
        additionalURL+= 'i=';
      }
    }
    additionalURL+=filter.value     
    return this.http.get(this.URL_BASE + additionalURL).pipe(
      first(),map((data:any)=> data));              
  } 
}
