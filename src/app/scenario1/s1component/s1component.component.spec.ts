import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S1componentComponent } from './s1component.component';

describe('S1componentComponent', () => {
  let component: S1componentComponent;
  let fixture: ComponentFixture<S1componentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S1componentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
