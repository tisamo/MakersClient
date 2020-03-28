import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedWorksComponent } from './selected-works.component';

describe('SelectedWorksComponent', () => {
  let component: SelectedWorksComponent;
  let fixture: ComponentFixture<SelectedWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
