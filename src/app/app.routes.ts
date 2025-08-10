import { Routes } from '@angular/router';
import { ListCocktails } from './components/list-cocktails/list-cocktails';
import { DetailCocktail } from './components/detail-cocktail/detail-cocktail';

export const routes: Routes = [
  { path: 'list-cocktails', component: ListCocktails },
  { path: 'detail-cocktail/:id', component: DetailCocktail },
  { path: '**', redirectTo: 'list-cocktails' },
];
