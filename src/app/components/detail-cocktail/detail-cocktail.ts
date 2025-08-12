import { Component } from '@angular/core';
import { inject } from '@angular/core/primitives/di';
import { ActivatedRoute, Params } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-detail-cocktail',
  imports: [],
  templateUrl: './detail-cocktail.html',
  styleUrl: './detail-cocktail.scss',
})
export class DetailCocktail {
  private activeRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activeRoute.params.pipe(first()).subscribe({
      next: (params: Params) => {
        const id = params['id'];
        console.log(id);
      },
    });
  }
}
