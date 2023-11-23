import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisfaccionFeedBackComponent } from './satisfaccion-feed-back.component';

describe('SatisfaccionFeedBackComponent', () => {
  let component: SatisfaccionFeedBackComponent;
  let fixture: ComponentFixture<SatisfaccionFeedBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SatisfaccionFeedBackComponent]
    });
    fixture = TestBed.createComponent(SatisfaccionFeedBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
