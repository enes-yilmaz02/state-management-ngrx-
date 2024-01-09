import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountServiceComponent } from './count-service.component';

describe('CountServiceComponent', () => {
  let component: CountServiceComponent;
  let fixture: ComponentFixture<CountServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountServiceComponent]
    });
    fixture = TestBed.createComponent(CountServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
