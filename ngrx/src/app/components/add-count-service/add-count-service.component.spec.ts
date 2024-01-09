import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCountServiceComponent } from './add-count-service.component';

describe('AddCountServiceComponent', () => {
  let component: AddCountServiceComponent;
  let fixture: ComponentFixture<AddCountServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCountServiceComponent]
    });
    fixture = TestBed.createComponent(AddCountServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
