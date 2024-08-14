import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modifier-employee',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './modifier-employee.component.html',
  styleUrl: './modifier-employee.component.css'
})
export class ModifierEmployeeComponent {

  employeeForm!:FormGroup;
  employee:any;
  infoEmployee: any;
 

  constructor(private apiService:ApiService, private formBuilder:FormBuilder, private route:ActivatedRoute,private router:Router){}



  ngOnInit():void{
    const id = this.route.snapshot.paramMap.get('id');

    if (typeof id === 'string') {
      this.loadEmploye(parseInt(id));
    } else {
     
      console.error('ID de l\'employé non valide');
    }

     this.employeeForm=this.formBuilder.group({
       id:[''],
       name: ['', Validators.required],
       position: ['', Validators.required],
       salary: ['', Validators.required],
     }) 
   
    

  }

  loadEmploye(id: number) {
    this.apiService.getDataEmployee(id).subscribe(response => {
    this.infoEmployee = response;   
    if (this.infoEmployee) {
      this.employeeForm.patchValue({
        id: this.infoEmployee.id,
        name: this.infoEmployee.name,
        position: this.infoEmployee.position,
        salary: this.infoEmployee.salary
      });
    } 
  });
   
  }

   


  

  updateEmployee() {
    if (this.employeeForm.valid) {
        const employeeId = this.employeeForm.get('id')?.value;
        const name = this.employeeForm.get('name')?.value;
        const position = this.employeeForm.get('position')?.value;
        const salary = this.employeeForm.get('salary')?.value;
        this.apiService.updateDataEmploye(employeeId, name, position, salary).subscribe({
          next: response => {
           
            this.employeeForm.reset();
            this.router.navigate(['/link_gestion_employes']);
          },
          error: error => {
            console.error('Erreur lors de la mise à jour des données :', error);
          }
        });
    }
   
 }



}
