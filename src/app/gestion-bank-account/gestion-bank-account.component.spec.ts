import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionBankAccountComponent } from './gestion-bank-account.component';

describe('GestionBankAccountComponent', () => {
  let component: GestionBankAccountComponent;
  let fixture: ComponentFixture<GestionBankAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionBankAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
