import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IFilter } from '../../models/filter.model';
import { CocktailService } from '../../services/cocktail-service';

@Component({
  selector: 'app-list-cocktails',
  imports: [FormsModule],
  templateUrl: './list-cocktails.html',
  styleUrl: './list-cocktails.scss',
})
export class ListCocktails {
  private cocktailService = inject(CocktailService);

  public filter: IFilter = {
    searchBy: 'name',
    value: '',
  };

  filterData() {
    this.cocktailService.getCocktails(this.filter).subscribe({

      next: (data: any)=> {
        console.log(data);
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
