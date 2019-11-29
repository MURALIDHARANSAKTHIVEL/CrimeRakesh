import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagepoliceComponent } from './managepolice.component';

describe('ManagepoliceComponent', () => {
  let component: ManagepoliceComponent;
  let fixture: ComponentFixture<ManagepoliceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagepoliceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagepoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
