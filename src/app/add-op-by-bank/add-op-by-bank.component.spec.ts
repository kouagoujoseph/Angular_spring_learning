import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOpByBankComponent } from './add-op-by-bank.component';

describe('AddOpByBankComponent', () => {
  let component: AddOpByBankComponent;
  let fixture: ComponentFixture<AddOpByBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOpByBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddOpByBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
