import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { MdDialog } from '@angular/material';
import { MoreInfoVisitPatientComponent } from '../more-info-visit-patient/more-info-visit-patient.component'
import { PatientService } from '../services/patient/patient.service';

import * as _ from 'lodash';


@Component({
  selector: 'app-patient-visit',
  templateUrl: './patient-visit.component.html',
  styleUrls: ['./patient-visit.component.css'],
  providers: [PatientService]
})
export class PatientVisitComponent implements OnInit {
  public patientVisists: object = [];
  public data: any = []
  public sort: any = []
  constructor(private patientService: PatientService, private routes: Router, public dialog: MdDialog) { }

  ngOnInit() {
    this.patientService.patientVisitInfo()
      .subscribe(result => {

        let asc = _.sortBy(result, [function (o: any) { return o.createdAt; }]);
        let desc = asc.reverse()
        this.patientVisists = desc;
        console.log(this.patientVisists)
      })
  }

  openDialog(pId: string) {
    let dialogRef = this.dialog.open(MoreInfoVisitPatientComponent, {
      data: pId
    });
  }

}




