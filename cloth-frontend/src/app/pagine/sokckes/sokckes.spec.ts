import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sokckes } from './sokckes';

describe('Sokckes', () => {
  let component: Sokckes;
  let fixture: ComponentFixture<Sokckes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sokckes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sokckes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
