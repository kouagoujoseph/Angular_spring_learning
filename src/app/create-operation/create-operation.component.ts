import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertPersoComponent } from "../alert-perso/alert-perso.component";

@Component({
  selector: 'app-create-operation',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgFor,
    AlertPersoComponent,
    NgIf
],
  templateUrl: './create-operation.component.html',
  styleUrl: './create-operation.component.css'
})
export class CreateOperationComponent implements OnInit {
  opForm!:FormGroup;
  dataBank: any;
  errorMessage: string = '';
  errorTyp: boolean = false;

  constructor(private apiService:ApiService, private formBuilder:FormBuilder,private router:Router){

  }

  ngOnInit(): void {
      this.opForm=this.formBuilder.group({
        bankid:['',Validators.required],
        dateOp:['',Validators.required],
        amount: ['', Validators.required],
        type: ['', Validators.required],
      });

      this.apiService.getDataBankAccount().subscribe(response=>{
        this.dataBank=response;
      })

  }

  addOperation(){
    if (this.opForm.valid) {
      const bankid=this.opForm.get("bankid")?.value;
      this.apiService.postDataOperation(bankid,this.opForm.value).subscribe({
        next:response=>{
          this.opForm.reset();
          this.router.navigateByUrl("/gestionBankAccount");
        },
        error:error=>{
          if (error.status === 400) {
            this.errorMessage = error.error;
            this.errorTyp=true;
          } else {
            console.error('Une autre erreur est survenue:', error);
          }
      }
      })
    }
  }

}
