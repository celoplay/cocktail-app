import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCocktails } from './detail-cocktails';

describe('DetailCocktails', () => {
  let component: DetailCocktails;
  let fixture: ComponentFixture<DetailCocktails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCocktails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCocktails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
