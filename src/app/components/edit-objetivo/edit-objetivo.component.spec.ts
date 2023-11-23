import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditObjetivoComponent } from './edit-objetivo.component';

describe('EditObjetivoComponent', () => {
  let component: EditObjetivoComponent;
  let fixture: ComponentFixture<EditObjetivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditObjetivoComponent]
    });
    fixture = TestBed.createComponent(EditObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
