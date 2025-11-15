import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clothen } from './clothen';

describe('Clothen', () => {
  let component: Clothen;
  let fixture: ComponentFixture<Clothen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Clothen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clothen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
