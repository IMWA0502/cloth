import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Divani } from './divani';

describe('Divani', () => {
  let component: Divani;
  let fixture: ComponentFixture<Divani>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Divani]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Divani);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
