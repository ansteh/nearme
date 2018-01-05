import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsMapComponent } from './deals-map.component';

describe('DealsMapComponent', () => {
  let component: DealsMapComponent;
  let fixture: ComponentFixture<DealsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
