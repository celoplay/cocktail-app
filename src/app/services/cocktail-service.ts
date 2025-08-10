import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private URL_BASE = "https://www.thecocktaildb.com/api/json/v1/1/";
  private http = inject(HttpClient);
}
