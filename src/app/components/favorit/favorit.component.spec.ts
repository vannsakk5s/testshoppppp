import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritComponent } from './favorit.component';

describe('FavoritComponent', () => {
  let component: FavoritComponent;
  let fixture: ComponentFixture<FavoritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
