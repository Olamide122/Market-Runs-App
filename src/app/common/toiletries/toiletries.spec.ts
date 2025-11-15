import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toiletries } from './toiletries';

describe('Toiletries', () => {
  let component: Toiletries;
  let fixture: ComponentFixture<Toiletries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toiletries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Toiletries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
