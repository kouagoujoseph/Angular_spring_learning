import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionOperationsComponent } from './gestion-operations.component';

describe('GestionOperationsComponent', () => {
  let component: GestionOperationsComponent;
  let fixture: ComponentFixture<GestionOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionOperationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
