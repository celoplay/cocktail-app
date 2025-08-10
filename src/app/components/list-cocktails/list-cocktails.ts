import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IFilter } from '../../models/filter.model';

@Component({
  selector: 'app-list-cocktails',
  imports: [FormsModule],
  templateUrl: './list-cocktails.html',
  styleUrl: './list-cocktails.scss',
})
export class ListCocktails {
  public filter: IFilter = {
    searchBy: 'name',
    value: '',
  };

  filterData() {}
}
