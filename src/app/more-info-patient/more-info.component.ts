import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { MdDialog, MdDialogRef } from '@angular/material';
import { PatientInfoComponent } from '../patient-info/patient-info.component';
import {MD_DIALOG_DATA} from '@angular/material';
import { PatientService } from '../services/patient/patient.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css'],
  providers : [PatientService]
})

export class MoreInfoComponent implements OnInit {
  patient : any
  constructor(@Inject(MD_DIALOG_DATA) public data: any,private patientService : PatientService, public dialog: MdDialog,private dialogRef: MdDialogRef<PatientInfoComponent>) { }

  ngOnInit() {
     this.patientService.patientInfoById(this.data)
      .subscribe(result => {
        this.patient = result;
        console.log(result)
      });
  }
    close(){

      this.dialogRef.close();
        this.dialogRef.afterClosed().subscribe(result => {
        });

        
    }

}













