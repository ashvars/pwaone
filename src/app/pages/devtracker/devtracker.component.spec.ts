import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevtrackerComponent } from './devtracker.component';
import { HeaderComponent } from '../header/header.component';

describe('DevtrackerComponent', () => {
  let component: DevtrackerComponent;
  let fixture: ComponentFixture<DevtrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, DevtrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevtrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
