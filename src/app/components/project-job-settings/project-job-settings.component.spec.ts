import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectJobSettingsComponent } from './project-job-settings.component';

describe('ProjectJobSettingsComponent', () => {
  let component: ProjectJobSettingsComponent;
  let fixture: ComponentFixture<ProjectJobSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectJobSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectJobSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
