import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { first } from 'rxjs';
import { CocktailService } from '../../services/cocktail-service';
import { ICocktail } from '../../models/cocktail.model';

@Component({
  selector: 'app-detail-cocktail',
  imports: [],
  templateUrl: './detail-cocktail.html',
  styleUrl: './detail-cocktail.scss',
})
export class DetailCocktail {
  private activeRoute = inject(ActivatedRoute);
  private cocktailService = inject(CocktailService);

  public cocktail!: ICocktail;

  ngOnInit() {
    this.activeRoute.params.pipe(first())
    .subscribe({
      next: (params: Params) => {
        const id = params['id'];
        console.log(id);
        this.cocktailService.getCocktailById(id).subscribe({
          next: (cocktailId: ICocktail) => {
            this.cocktail = cocktailId;
          }
        });
      }
    });
  }
}
