import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tshirt } from './tshirt';

describe('Tshirt', () => {
  let component: Tshirt;
  let fixture: ComponentFixture<Tshirt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tshirt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tshirt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
