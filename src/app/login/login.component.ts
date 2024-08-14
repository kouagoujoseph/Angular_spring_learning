import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  formLogin!:FormGroup;
  constructor(private apiService:ApiService, private fromBuilder:FormBuilder, private route:Router,private http: HttpClient){

  }


  ngOnInit(): void {

    this.formLogin=this.fromBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
    });
  }

  onSubmitLogin() {
      if (this.formLogin.valid) {
      
        

        this.apiService.postLogin(this.formLogin.get("username")?.value,this.formLogin.get("password")?.value).subscribe({
          next: (response)=>{
            
              console.log(response);
            this.route.navigate(['/dashboard']);
            
          },
          error:(error)=>{
            console.error('Login failed', error);
          }
        })
        
      }
    }

}
