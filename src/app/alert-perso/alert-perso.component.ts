import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-perso',
  standalone: true,
  imports:[
    NgIf,
    NgClass
  ],
  templateUrl: './alert-perso.component.html',
  styleUrl: './alert-perso.component.css'
})
export class AlertPersoComponent {


  @Input() message: string = '';
  @Input() type: 'success' | 'danger' = 'danger';
  visible: boolean = true;

  close() {
    this.visible = false;
  }
 
}
