import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IFilter } from '../../models/filter.model';
import { CocktailService } from '../../services/cocktail-service';
import { ICocktail } from '../../models/cocktel.model';

@Component({
  selector: 'app-list-cocktails',
  imports: [FormsModule],
  templateUrl: './list-cocktails.html',
  styleUrl: './list-cocktails.scss',
})
export class ListCocktails {
  private cocktailService = inject(CocktailService);
  public listCocktails: ICocktail[]=[];

  public filter: IFilter = {
    searchBy: 'name',
    value: '',
  };

  filterData() {
    this.cocktailService.getCocktails(this.filter).subscribe({

      next: (cocktails: ICocktail[])=> {
        //console.log(ListCocktails)
        this.listCocktails = cocktails;
      },
      error:(error)=>{
        console.error(error)
      },
      complete:()=>{

      }
    }
      
    )
  }
}
