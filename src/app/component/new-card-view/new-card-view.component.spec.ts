import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCardViewComponent } from './new-card-view.component';

describe('NewCardViewComponent', () => {
  let component: NewCardViewComponent;
  let fixture: ComponentFixture<NewCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
