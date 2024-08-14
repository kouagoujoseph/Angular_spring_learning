import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { FooterComponent } from "./footer/footer.component";
import { interval, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormulaireComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    RouterOutlet,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
 
}
