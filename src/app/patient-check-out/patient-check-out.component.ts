import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { DatepickerModule } from 'angular2-material-datepicker'
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../services/patient/patient.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-patient-check-out',
  templateUrl: './patient-check-out.component.html',
  styleUrls: ['./patient-check-out.component.css'],
  providers: [DatepickerModule, PatientService]
})
export class PatientCheckOutComponent implements OnInit {
  patient: any = {};
  patientMore  :any={}
  public masc: Number;
  public tPrice: Number;
  public add: Number;
  messages: any = {};
  public res :any={};

  constructor(private patientService: PatientService, private route: ActivatedRoute, private routes: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.patientService.patientVisitInfoById(params.pChkOut)
        .subscribe(result => {
          this.patientMore = result;
          this.patient = result.patient;
        });
    });
  }
  onChange() {
    // console.log(this.patient.MdcnAndSrvChrg)
    this.masc = this.patientMore.MdcnAndSrvChrg;
    this.patientMore.totalPrice = +this.masc + +this.patientMore.price
  }

  patientChkt() {

    const patientHistory = _.omit(this.patientMore, ['__v','createdAt','checkedIn']);
    
    this.patientService.addPatientHistory(patientHistory)
      .subscribe(result => {
        console.log("matag",result)
        this.res = result;
        if (result.statusCode == '400') {
          this.messages.err = result.message;
          let __this = this;
          setTimeout(function () {
            __this.messages.err = null
          }, 4000);

        }
        else {

          this.messages.msg = "Patient All Information Saved Successfully";
          let __this = this;
          setTimeout(function () {
          let id = __this.res._id;
        
          __this.routes.navigate(['/admin/patient-checkOut-invoice', id]);
            __this.messages.msg = null
       
          }, 2000);

         // console.log(result)


        }
      })
  }

}
