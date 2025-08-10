import { Routes } from '@angular/router';
import { ListCocktails } from './components/list-cocktails/list-cocktails';
import { DetailCocktails } from './components/detail-cocktails/detail-cocktails';

export const routes: Routes = [

    {path: 'list-cocktails', component:ListCocktails},
    {path: 'detail-cocktails/:  id', component:DetailCocktails}
];
