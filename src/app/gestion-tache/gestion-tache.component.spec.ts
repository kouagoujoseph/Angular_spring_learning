import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTacheComponent } from './gestion-tache.component';

describe('GestionTacheComponent', () => {
  let component: GestionTacheComponent;
  let fixture: ComponentFixture<GestionTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionTacheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
