import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent implements OnInit{

  clientForm!:FormGroup;

  constructor(private apiService:ApiService, private formBuilder:FormBuilder,private router:Router){
    
  }

  ngOnInit(): void {
    this.clientForm=this.formBuilder.group({
      id:[''],
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
      
  }

  addClient(){
    if (this.clientForm.valid) {
      this.apiService.postDataClient(this.clientForm.value).subscribe({
        next:response=>{
         this.clientForm.reset;
         this.router.navigateByUrl("/gestionClient");
        },
        error:error=>{
          console.error('Erreur lors de l\'ajout de l\'employé :', error);
        }
      })
      
    }
  }
}
