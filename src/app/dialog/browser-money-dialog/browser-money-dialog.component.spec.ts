import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserMoneyDialogComponent } from './browser-money-dialog.component';

describe('BrowserMoneyDialogComponent', () => {
  let component: BrowserMoneyDialogComponent;
  let fixture: ComponentFixture<BrowserMoneyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowserMoneyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserMoneyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
