import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertPersoComponent } from './alert-perso.component';

describe('AlertPersoComponent', () => {
  let component: AlertPersoComponent;
  let fixture: ComponentFixture<AlertPersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertPersoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
