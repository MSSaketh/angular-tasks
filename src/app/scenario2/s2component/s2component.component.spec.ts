import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S2componentComponent } from './s2component.component';

describe('S2componentComponent', () => {
  let component: S2componentComponent;
  let fixture: ComponentFixture<S2componentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S2componentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
