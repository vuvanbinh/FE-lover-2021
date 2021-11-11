import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErorrIsBlockComponent } from './erorr-is-block.component';

describe('ErorrIsBlockComponent', () => {
  let component: ErorrIsBlockComponent;
  let fixture: ComponentFixture<ErorrIsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErorrIsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErorrIsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
