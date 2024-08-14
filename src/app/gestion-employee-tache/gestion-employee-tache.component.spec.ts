import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEmployeeTacheComponent } from './gestion-employee-tache.component';

describe('GestionEmployeeTacheComponent', () => {
  let component: GestionEmployeeTacheComponent;
  let fixture: ComponentFixture<GestionEmployeeTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionEmployeeTacheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionEmployeeTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
