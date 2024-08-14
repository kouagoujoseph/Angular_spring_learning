import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireTacheComponent } from './formulaire-tache.component';

describe('FormulaireTacheComponent', () => {
  let component: FormulaireTacheComponent;
  let fixture: ComponentFixture<FormulaireTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireTacheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulaireTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
