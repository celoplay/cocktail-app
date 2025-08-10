import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCocktails } from './list-cocktails';

describe('ListCocktails', () => {
  let component: ListCocktails;
  let fixture: ComponentFixture<ListCocktails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCocktails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCocktails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
