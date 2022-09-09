import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFilePipeComponent } from './custom-file-pipe.component';

describe('CustomFilePipeComponent', () => {
  let component: CustomFilePipeComponent;
  let fixture: ComponentFixture<CustomFilePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomFilePipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFilePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
