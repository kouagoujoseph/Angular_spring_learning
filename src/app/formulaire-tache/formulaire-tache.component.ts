import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import {Task} from'../model/Task';

@Component({
  selector: 'app-formulaire-tache',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    ReactiveFormsModule,
    AsyncPipe
  ],
  templateUrl: './formulaire-tache.component.html',
  styleUrl: './formulaire-tache.component.css'
})
export class FormulaireTacheComponent {
  taskForm!:FormGroup;
  data: any;
  dataTasks: any;
  taksPreview$!:Observable<Task>;

  constructor(private apiService:ApiService, private formBuilder:FormBuilder, private router:Router){

  }

  ngOnInit():void{

    this.taskForm=this.formBuilder.group({
        id:[''],
        description:['',Validators.required]
    });

    this.taksPreview$=this.taskForm.valueChanges.pipe(
      map(formValue=>({
       ...formValue,
       id:0,
      }))
    );
    
    this.apiService.getData().subscribe(response => {
      this.data = response;
    });
    this.apiService.getDataTask().subscribe(response => {
      this.dataTasks = response;
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
  addTask(){
    if (this.taskForm.valid) {
      this.apiService.postDataTask(this.taskForm.value).subscribe({

        next:response=>{
          this.router.navigate(['/gestionTache']);
          
          
        },

        error:error=>{
          console.error("Erreur",error);
   
        }

      });
      
    }
  }

}
