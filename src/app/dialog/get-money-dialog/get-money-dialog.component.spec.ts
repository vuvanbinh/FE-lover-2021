import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMoneyDialogComponent } from './get-money-dialog.component';

describe('GetMoneyDialogComponent', () => {
  let component: GetMoneyDialogComponent;
  let fixture: ComponentFixture<GetMoneyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMoneyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMoneyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
