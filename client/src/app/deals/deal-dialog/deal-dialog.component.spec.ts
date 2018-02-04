import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealDialogComponent } from './deal-dialog.component';

describe('DealDialogComponent', () => {
  let component: DealDialogComponent;
  let fixture: ComponentFixture<DealDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
