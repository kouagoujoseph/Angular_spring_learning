import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { __values } from 'tslib';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [
    JsonPipe,
    NgIf,
    NgFor,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {
  data: any;
  dataTasks: any;
  showAddForm: boolean = false;
  showUpdateForm: boolean = false;
  showAddFormTask: boolean = false;
  showListTask: boolean = false;
  employeeForm!:FormGroup;
 
  addTaskEmployeeForm!:FormGroup;
  taskForm!: FormGroup;
  constructor(private apiService: ApiService, private formBuilder:FormBuilder,private route:Router) {

  }

  employeToUpdate(id:number) {
    this.route.navigate(['/modifierEmployee', id]);     
  }



  ngOnInit(): void {
    
   this.taskForm = this.formBuilder.group({
    id:[''],
    description: ['', Validators.required],
    });
    this.employeeForm=this.formBuilder.group({

      id:[''],
      name:['', Validators.required],
      position:['', Validators.required],
      salaire:['', Validators.required],

    });

    this.addTaskEmployeeForm = this.formBuilder.group({
      employee_id: ['', Validators.required],
      tasks_id: ['', Validators.required]
      });

    this.refreshData();
  }


  


  refreshData() {
    this.apiService.getData().subscribe(response => {
      this.data = response;
    });
    this.apiService.getDataTask().subscribe(response => {
      this.dataTasks = response;
    });
  }

  confirmDelete(employee: any) {
    if (confirm(`Voulez-vous vraiment supprimer l'employé ${employee.name} ?`)) {
      this.apiService.deleteData(employee.id).subscribe(() => {
        this.data = this.data.filter((e: { id: any; }) => e.id !== employee.id);
        this.refreshData();
      });
    }
  }





 

  


  // addEmployee() {
  //   if (this.employeeForm.valid) {
  //     this.apiService.postData(this.employeeForm.value).subscribe({
  //       next: response => {
  //         console.log('Employé ajouté avec succès :', response);
  //         this.refreshData();
  //         this.showAddForm = false;
  //         this.employeeForm.reset();
  //       },
  //       error: error => {
  //         console.error('Erreur lors de l\'ajout de l\'employé :', error);
  //         this.showErrorMessage(error.error.message);
  //       }
  //     });
  //   }
  // }
 


  addTask() {
    if (this.taskForm.valid) {
      
      console.log(this.taskForm.value);
      
       this.apiService.postDataTask(this.taskForm.value).subscribe({
         next: response => {
           console.log('Tache ajoutée avec succès :', response);
           this.refreshData();
           this.showAddFormTask = false;
           this.taskForm.reset();
         },
         error: error => {
           console.error('Erreur lors de l\'ajout de la tache :', error);
           this.showErrorMessage(error.error.message);
         }
       });
    }
  }


  addTaskEmployee() {
    if (this.addTaskEmployeeForm.valid) {
      
       this.apiService.postDataTaskToEmployee(this.addTaskEmployeeForm.value).subscribe({
         next: response => {
           console.log('Tache ajoutée avec succès :', response);
           this.refreshData();
           this.showListTask = false;
           this.addTaskEmployeeForm.reset();
         },
         error: error => {
           console.error('Erreur lors de l\'ajout de la tache :', error);
           this.showErrorMessage(error.error.message);
         }
       });
    }
  }


  

  showErrorMessage(message: string) {
    alert(message);
  }
   

}
