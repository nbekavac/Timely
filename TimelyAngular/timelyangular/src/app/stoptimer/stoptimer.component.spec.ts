import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoptimerComponent } from './stoptimer.component';

describe('StoptimerComponent', () => {
  let component: StoptimerComponent;
  let fixture: ComponentFixture<StoptimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoptimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoptimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
