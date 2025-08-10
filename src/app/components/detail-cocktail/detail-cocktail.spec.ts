import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCocktail } from './detail-cocktail';

describe('DetailCocktail', () => {
  let component: DetailCocktail;
  let fixture: ComponentFixture<DetailCocktail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCocktail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCocktail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
