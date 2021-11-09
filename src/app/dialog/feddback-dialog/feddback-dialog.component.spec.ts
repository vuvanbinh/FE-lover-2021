import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeddbackDialogComponent } from './feddback-dialog.component';

describe('FeddbackDialogComponent', () => {
  let component: FeddbackDialogComponent;
  let fixture: ComponentFixture<FeddbackDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeddbackDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeddbackDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
