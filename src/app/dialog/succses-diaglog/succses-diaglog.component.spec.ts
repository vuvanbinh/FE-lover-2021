import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccsesDiaglogComponent } from './succses-diaglog.component';

describe('SuccsesDiaglogComponent', () => {
  let component: SuccsesDiaglogComponent;
  let fixture: ComponentFixture<SuccsesDiaglogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccsesDiaglogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccsesDiaglogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
