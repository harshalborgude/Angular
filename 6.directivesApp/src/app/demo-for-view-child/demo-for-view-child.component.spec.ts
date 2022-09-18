import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoForViewChildComponent } from './demo-for-view-child.component';

describe('DemoForViewChildComponent', () => {
  let component: DemoForViewChildComponent;
  let fixture: ComponentFixture<DemoForViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoForViewChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoForViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
