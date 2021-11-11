import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSuccessDialogComponent } from './order-success-dialog.component';

describe('OrderSuccessDialogComponent', () => {
  let component: OrderSuccessDialogComponent;
  let fixture: ComponentFixture<OrderSuccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSuccessDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
