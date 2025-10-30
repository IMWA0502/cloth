import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bagno } from './bagno';

describe('Bagno', () => {
  let component: Bagno;
  let fixture: ComponentFixture<Bagno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bagno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bagno);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
