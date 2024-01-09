import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCountStateComponent } from './add-count-state.component';

describe('AddCountStateComponent', () => {
  let component: AddCountStateComponent;
  let fixture: ComponentFixture<AddCountStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCountStateComponent]
    });
    fixture = TestBed.createComponent(AddCountStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
