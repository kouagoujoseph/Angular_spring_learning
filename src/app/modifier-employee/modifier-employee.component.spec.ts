import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEmployeeComponent } from './modifier-employee.component';

describe('ModifierEmployeeComponent', () => {
  let component: ModifierEmployeeComponent;
  let fixture: ComponentFixture<ModifierEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
