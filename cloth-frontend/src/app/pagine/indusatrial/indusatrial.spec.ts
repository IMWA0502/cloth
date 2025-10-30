import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indusatrial } from './indusatrial';

describe('Indusatrial', () => {
  let component: Indusatrial;
  let fixture: ComponentFixture<Indusatrial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Indusatrial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Indusatrial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
