import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproducirCursosComponent } from './reproducir-cursos.component';

describe('ReproducirCursosComponent', () => {
  let component: ReproducirCursosComponent;
  let fixture: ComponentFixture<ReproducirCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReproducirCursosComponent]
    });
    fixture = TestBed.createComponent(ReproducirCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
