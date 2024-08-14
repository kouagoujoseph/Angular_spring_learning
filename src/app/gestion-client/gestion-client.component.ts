import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-gestion-client',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgFor,
    NgIf
  ],
  templateUrl: './gestion-client.component.html',
  styleUrl: './gestion-client.component.css'
})
export class GestionClientComponent implements OnInit{

  dataClient!:any;
  dataBankByClient!:any;
  showDataBankByClient:boolean=false;

constructor(private apiService: ApiService, private formBuilder:FormBuilder,private route:Router){

}
  ngOnInit(): void {
      this.apiService.getDataClient().subscribe(response=>{
        this.dataClient=response;
      });
  }

  ConnsulterBank(id:String ) {
    this.apiService.getDataBankAccountByClient(id).subscribe(response=>{
      this.dataBankByClient=response;
      this.showDataBankByClient=true;
    });
    }
    Operer(id:String){
      this.route.navigate(['/addOpByBank',id]);
    }
}
