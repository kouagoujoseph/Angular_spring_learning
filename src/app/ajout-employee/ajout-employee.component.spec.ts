import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEmployeeComponent } from './ajout-employee.component';

describe('AjoutEmployeeComponent', () => {
  let component: AjoutEmployeeComponent;
  let fixture: ComponentFixture<AjoutEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
