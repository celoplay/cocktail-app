import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { first, switchMap } from 'rxjs';
import { CocktailService } from '../../services/cocktail-service';
import { ICocktail } from '../../models/cocktail.model';

@Component({
  selector: 'app-detail-cocktail',
  imports: [RouterLink],
  templateUrl: './detail-cocktail.html',
  styleUrl: './detail-cocktail.scss',
})
export class DetailCocktail {
  private activeRoute = inject(ActivatedRoute);
  private cocktailService = inject(CocktailService);

  public cocktail!: ICocktail;
  public loadCocktail: boolean = false;

  ngOnInit() {
    this.activeRoute.params
      .pipe(
        first(), // o quitarlo si quieres escuchar cambios de id
        switchMap((params: Params) => {
          const id = params['id'];
          return this.cocktailService.getCocktailById(id);
        })
      )
      .subscribe({
        next: (cocktail: ICocktail) => {
          this.cocktail = cocktail;
        },
        error: (err) => console.error(err),
        complete: () => {
          this.loadCocktail = true;
        }
      });
  }
}
