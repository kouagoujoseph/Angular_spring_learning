import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gestion-bank-account',
  standalone: true,
  imports: [
    RouterLink,
    NgFor,
    NgIf
  ],
  templateUrl: './gestion-bank-account.component.html',
  styleUrl: './gestion-bank-account.component.css'
})
export class GestionBankAccountComponent implements OnInit{


  dataBankAccount:any;
  dataOperationsByBankAccount: any;
  showOperations:boolean=false;
  bankAccountIdPut!: String;
  credit!:number;
  debit!:number;
  montantActuel!:number;
  constructor(private apiService: ApiService, private formBuilder:FormBuilder,private route:Router){
    
  }

  ngOnInit(): void {
      this.apiService.getDataBankAccount().subscribe(response=>{
        this.dataBankAccount=response;
      });
      this.bankAccountIdPut;
      
  }

  ConsulterOp(id:String,montant:number) {
   this.apiService.getOperationByBankAccount(id).subscribe(response=>{
    this.dataOperationsByBankAccount=response;
    this.credit=0;
    this.debit=0;
    this.montantActuel=montant;
    for (let index = 0; index < this.dataOperationsByBankAccount.length; index++) {
      if (this.dataOperationsByBankAccount[index].type=="CREDIT") {
        this.credit+=this.dataOperationsByBankAccount[index].amount;
      }

      if (this.dataOperationsByBankAccount[index].type=="DEBIT") {
        this.debit+=this.dataOperationsByBankAccount[index].amount;
      }
    }
    this.bankAccountIdPut=id;
    this.showOperations=true;
    
   })
    }


    DownloadRIB(bankId:String){
     this.apiService.getDownloadPdBankAccountRIB(bankId).subscribe((response)=>{
          const blob = new Blob([response], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `BankAccount_RIB_${bankId}.pdf`;
          a.click();
          window.URL.revokeObjectURL(url);
     })
    }
    download(bankAccountId:String) {
         this.apiService.getDownloadPdfOperationByBankAccount(bankAccountId).subscribe((response)=>{
          const blob = new Blob([response], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `operations_${bankAccountId}.pdf`;
          a.click();
          window.URL.revokeObjectURL(url);
         })
      }
}
