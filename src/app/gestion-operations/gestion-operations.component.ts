import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-gestion-operations',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgFor,
    RouterLink
  ],
  templateUrl: './gestion-operations.component.html',
  styleUrl: './gestion-operations.component.css'
})
export class GestionOperationsComponent  implements OnInit{
    dataOp:any;
constructor(private apiService:ApiService,private formBuilder:FormBuilder, private router:Router){

}

ngOnInit(): void {

    this.apiService.getAllOperations().subscribe(
      response=>{
         this.dataOp=response;
      }
    );  
}

}
