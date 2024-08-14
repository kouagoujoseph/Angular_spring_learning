import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-op-by-bank',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,

  ],
  templateUrl: './add-op-by-bank.component.html',
  styleUrl: './add-op-by-bank.component.css'
})
export class AddOpByBankComponent implements OnInit{

  opForm!:FormGroup;
  bankId: any;
  

  constructor(private apiService:ApiService, private formBuilder:FormBuilder, private route:ActivatedRoute,private router:Router){
    
  }

  ngOnInit(): void {
      this.bankId=this.route.snapshot.paramMap.get("id");
      this.opForm=this.formBuilder.group({
        bankid:['',Validators.required],
        dateOp:['',Validators.required],
        amount: ['', Validators.required],
        type: ['', Validators.required],
      }); 

      if (typeof this.bankId === 'string') {
        this.loadEmploye(this.bankId);
      } else {
        console.error('ID de l\'employé non valide');
      }
       
      this.loadEmploye;   
  }


  loadEmploye(bankId:String) {
     
    if (bankId) {
      this.opForm.patchValue({
        bankid: bankId,
      });
    } 
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
       console.log("non effectué");
      }
      })
      
    }
  }



}
