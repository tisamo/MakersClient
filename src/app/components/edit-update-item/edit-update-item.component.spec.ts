import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUpdateItemComponent } from './edit-update-item.component';

describe('EditUpdateItemComponent', () => {
  let component: EditUpdateItemComponent;
  let fixture: ComponentFixture<EditUpdateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUpdateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUpdateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
