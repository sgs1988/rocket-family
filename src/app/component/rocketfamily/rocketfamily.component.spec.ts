import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketfamilyComponent } from './rocketfamily.component';

describe('RocketfamilyComponent', () => {
  let component: RocketfamilyComponent;
  let fixture: ComponentFixture<RocketfamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketfamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketfamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
