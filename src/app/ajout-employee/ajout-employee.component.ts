import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ApiService } from '../api.service';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ajout-employee',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgFor,
    RouterLink
  ],
  templateUrl: './ajout-employee.component.html',
  styleUrl: './ajout-employee.component.css'
})
export class AjoutEmployeeComponent {

  employeeForm!: FormGroup;
  data:any;
  dataTasks:any;

  constructor(private apiService:ApiService, private formBuilder:FormBuilder,private router:Router){

  }

  ngOnInit():void{
    this.employeeForm=this.formBuilder.group({
      id:[''],
      name: ['', Validators.required],
      position: ['', Validators.required],
      salary: ['', Validators.required],
    }) 
  }

  addEmployee() {
    if (this.employeeForm.valid) {
      
       this.apiService.postData(this.employeeForm.value).subscribe({
         next: response => {
           this.refreshData();
           this.employeeForm.reset();
           this.router.navigate(['/link_gestion_employes']);
         },
         error: error => {
           console.error('Erreur lors de l\'ajout de l\'employé :', error);
         
         }
       });
    }
  }

  refreshData() {
    this.apiService.getData().subscribe(response => {
      this.data = response;
    });
    this.apiService.getDataTask().subscribe(response => {
      this.dataTasks = response;
    });
  }


}
