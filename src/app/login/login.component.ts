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
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `username=${this.formLogin.get("username")?.value}&password=${this.formLogin.get("password")?.value}`;

      if (this.formLogin.valid) {

        this.http.post('http://127.0.0.1:8080/login', body, { headers, observe: 'response' }).subscribe({
          next: (response)=>{
            if (response.status === 200) {
              console.log(response);
            this.route.navigate(['/dashboard']);
            }
          },
          error:(error)=>{
            console.error('Login failed', error);
          }
        })
        
      }
    }

}
