import { Component, inject, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IFilter } from '../../models/filter.model';
import { CocktailService } from '../../services/cocktail-service';
import { ICocktail } from '../../models/cocktail.model';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-list-cocktails',
  imports: [FormsModule, RouterLink, NgxPaginationModule],
  templateUrl: './list-cocktails.html',
  styleUrl: './list-cocktails.scss',
})
export class ListCocktails {
  private cocktailService = inject(CocktailService);
  public listCocktails: ICocktail[] = [];
  public searched: boolean = false;
  public loadCocktails: boolean = true;

  //valores de paginacion
  public currentPage = 1;
  public itemsPerPage = 12;

  public filter: IFilter = {
    searchBy: 'name',
    value: '',
  };

  filterData() {
    this.searched = true;
    this.loadCocktails = false;
    
    this.cocktailService.getCocktails(this.filter).subscribe({
      next: (cocktails: ICocktail[]) => {
        this.listCocktails = cocktails;
        console.log(cocktails);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        //this.searched = false;
        this.loadCocktails = true;
      },
    });
  }
  //metodo paginacion
  pageChange(page: number) {
    this.currentPage = page;
  }
}
