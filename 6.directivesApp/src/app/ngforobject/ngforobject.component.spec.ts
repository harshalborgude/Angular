import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforobjectComponent } from './ngforobject.component';

describe('NgforobjectComponent', () => {
  let component: NgforobjectComponent;
  let fixture: ComponentFixture<NgforobjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforobjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgforobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
