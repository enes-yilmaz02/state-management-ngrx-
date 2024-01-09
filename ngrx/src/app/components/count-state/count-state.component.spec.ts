import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountStateComponent } from './count-state.component';

describe('CountStateComponent', () => {
  let component: CountStateComponent;
  let fixture: ComponentFixture<CountStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountStateComponent]
    });
    fixture = TestBed.createComponent(CountStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
