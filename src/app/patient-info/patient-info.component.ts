import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { MdDialog } from '@angular/material';
import { MoreInfoComponent } from '../more-info-patient/more-info.component'
import { PatientService } from '../services/patient/patient.service';
@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css'],
  providers: [PatientService]
})
export class PatientInfoComponent implements OnInit {



constructor(private patientService : PatientService, private routes: Router, public dialog: MdDialog) { }
patient: any;
ngOnInit() {
  this.patientService.patientInfo()
    .subscribe(result => {
      this.patient = result;

    });
}

openDialog(pId: string){
  let dialogRef = this.dialog.open(MoreInfoComponent, {
    data: pId
    
  });

}
deleteRecord(id : any){
  this.patientService.deletePatient(id)
    .subscribe(result => {
      if (result.ok == 1) {
        for (var r = 0; r < this.patient.length; r++) {
          if (this.patient[r]._id == id) {
            this.patient.splice(r, 1);
          }
        }
      }

    });
}
    }














