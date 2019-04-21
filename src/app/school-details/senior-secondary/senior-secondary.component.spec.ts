import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorSecondaryComponent } from './senior-secondary.component';

describe('SeniorSecondaryComponent', () => {
  let component: SeniorSecondaryComponent;
  let fixture: ComponentFixture<SeniorSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeniorSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
