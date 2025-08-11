import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IFilter } from '../models/filter.model';
import { first, map } from 'rxjs';
import { ICocktail } from '../models/cocktel.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private URL_BASE = 'https://www.thecocktaildb.com/api/json/v1/1/';
  private http = inject(HttpClient);

  //Devuelve todas las propiedades no vacías cuyo nombre empieza por `property`
  private parseArray(drink: any, property:string):string[]{
    return Object.keys(drink)
    .filter(key =>key.startsWith(property) && drink[key])
    .map(key => drink[key] as string)
  }

  getCocktails(filter: IFilter) {
    let additionalURL = '';

    if (filter.searchBy == 'name') {
      additionalURL = 'search.php?s=';
    } else {
      additionalURL = 'filter.php?';
      if (filter.searchBy == 'glass') {
        additionalURL += 'g=';
      } else if (filter.searchBy == 'category') {
        additionalURL += 'c=';
      } else {
        additionalURL += 'i=';
      }
    }
    additionalURL += filter.value;
    return this.http.get(this.URL_BASE + additionalURL).pipe(
      first(),
      map((data: any) => data)
    );
  }

  private parseDrinks(data: any) {
    if (!data) return [];

    const drinks = ['drinks'] as any[];
    

    return drinks.map((drink) => {
      return {
        id: drink['idDrink'],
        name: drink['strDrink'],
      glass: drink['strGlass'],
      img: drink['strDrinkThumb'],
      instructions:drink['strInstructionsES']||drink['strInstructions'],
      ingredients:this.parseArray(drink,'strIngredient'),
      measures:this.parseArray(drink,'strMeasure')
    } as ICocktail;
    });
  }


}
