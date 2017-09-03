import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysiciansComponent } from './physicians.component';

describe('PhysiciansComponent', () => {
  let component: PhysiciansComponent;
  let fixture: ComponentFixture<PhysiciansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysiciansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysiciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
