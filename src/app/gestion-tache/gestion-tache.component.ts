import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestion-tache',
  standalone: true,
  imports: [
    NgFor,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './gestion-tache.component.html',
  styleUrl: './gestion-tache.component.css'
})
export class GestionTacheComponent {

  dataTasks:any;

  constructor(private apiService:ApiService,private formBuilder:FormBuilder){

  }

  ngOnInit():void{
    this.refreshData();
  }

  refreshData() {
    this.apiService.getDataTask().subscribe(response => {
      this.dataTasks = response;
    });
  }

  deleteTache(id:number){
    if (confirm("voulez vraiment supprimé cette tâche?")) {
      this.apiService.deleteDataTask(id).subscribe(()=>{
        this.dataTasks = this.dataTasks.filter((e: { id: any; }) => e.id !== id);
        this.refreshData();
      })
       
    }
     
  }

 
}
