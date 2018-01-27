import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient/patient.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient-chk-out-invoice',
  templateUrl: './patient-chk-out-invoice.component.html',
  styleUrls: ['./patient-chk-out-invoice.component.css'],
  providers : [PatientService]

})
export class PatientChkOutInvoiceComponent implements OnInit {

  constructor( private route: ActivatedRoute, private patientService : PatientService) { }
  public data:any;
  ngOnInit() {
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

}
