import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-add-bank-account',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgFor
  ],
  templateUrl: './add-bank-account.component.html',
  styleUrl: './add-bank-account.component.css'
})
export class AddBankAccountComponent implements OnInit {
  bankAccountForm!:FormGroup;
  dataClient!:any;

  constructor(private apiService:ApiService, private formBuilder:FormBuilder,private router:Router){
    
  }

  ngOnInit(): void {
      
    this.bankAccountForm=this.formBuilder.group({
      id:[''],
      customerId:[''],
      createdAt: ['', Validators.required],
      balance: ['', Validators.required],
      status: ['', Validators.required],
      currency: ['', Validators.required]
    });

    this.apiService.getDataClient().subscribe(response=>{
      this.dataClient=response;
    });
  }

  addBankAccount(){
   if (this.bankAccountForm.valid) {
    
    const customerId=this.bankAccountForm.get("customerId")?.value;
    // const id=this.bankAccountForm.get("id")?.value;
    // const createdAt=this.bankAccountForm.get("createdAt")?.value;
    // const status=this.bankAccountForm.get("status")?.value;
    // const currency=this.bankAccountForm.get("currency")?.value;
    // const balance=this.bankAccountForm.get("balance")?.value;
    this.apiService.postDataBankAccounnt(customerId,this.bankAccountForm.value).subscribe({
       next:response=>{
          this.bankAccountForm.reset();
          this.router.navigateByUrl("/gestionBankAccount")
       },
       error:error=>{
           console.error(error);
           
       }
    });
   }

  }

}
