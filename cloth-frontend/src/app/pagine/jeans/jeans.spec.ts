import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jeans } from './jeans';

describe('Jeans', () => {
  let component: Jeans;
  let fixture: ComponentFixture<Jeans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jeans]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jeans);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
