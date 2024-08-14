import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-gestion-employee-tache',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    NgFor,
  ],
  templateUrl: './gestion-employee-tache.component.html',
  styleUrl: './gestion-employee-tache.component.css'
})
export class GestionEmployeeTacheComponent{
  data: any;
  dataTasks: any;
  addTaskEmployeeForm!:FormGroup;

  constructor(private apiService:ApiService,private formBuilder:FormBuilder, private router:Router){

  }

  ngOnInit():void{

    this.apiService.getData().subscribe(response => {
      this.data = response;
    });
    this.apiService.getDataTask().subscribe(response => {
      this.dataTasks = response;
    });

     this.addTaskEmployeeForm = this.formBuilder.group({
      employee_id: ['', Validators.required],
      tasks_id: ['', Validators.required]
      });
    
  }

  addTaskEmployee() {
    if (this.addTaskEmployeeForm.valid) {
      
       this.apiService.postDataTaskToEmployee(this.addTaskEmployeeForm.value).subscribe({
         next: response => {
           this.addTaskEmployeeForm.reset();
           this.router.navigate(['/link_gestion_employes']);
         },
         error: error => {
         }
       });
    }
  }
  
}
