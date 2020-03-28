import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayprojectjobsComponent } from './displayprojectjobs.component';

describe('DisplayprojectjobsComponent', () => {
  let component: DisplayprojectjobsComponent;
  let fixture: ComponentFixture<DisplayprojectjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayprojectjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayprojectjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
