import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient/patient.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-reg-invoice',
  templateUrl: './patient-reg-invoice.component.html',
  styleUrls: ['./patient-reg-invoice.component.css'],
  providers : [PatientService]
})
export class PatientRegInvoiceComponent implements OnInit {
  
  public tokenNo :any;
  constructor(private route: ActivatedRoute, private patientService : PatientService) { }
  public data:any;
  ngOnInit() {
   // localStorage.setItem("tokenNo" , "0")          
    console.log()
    let t = parseInt(localStorage.getItem("tokenNo"));
   // console.log(t);
    let sum = t+1;
    this.tokenNo = sum.toString();
    
   localStorage.setItem("tokenNo" , this.tokenNo)
    
     this.route.params.subscribe(params => {
       console.log(params.id)
      this.patientService.patientVisitInfoById(params.id)
        .subscribe(result => {
         this.data = result;
          console.log("asasasasasasassa",result);
        });
  
     })
  }
    print(){
      window.print()
    }
    reset(){
      localStorage.removeItem("tokenNo")            
    }
    set(){
      localStorage.setItem("tokenNo" , "0")      
    }
}

