import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { MdDialog, MdDialogRef } from '@angular/material';
import { DoctorsInfoComponent } from '../doctors-info/doctors-info.component';
import { MD_DIALOG_DATA } from '@angular/material';
import { DoctorService } from '../services/doctor/doctor.service';
@Component({
  selector: 'app-more-info-doctor',
  templateUrl: './more-info-doctor.component.html',
  styleUrls: ['./more-info-doctor.component.css'],
  providers: [DoctorService]
})
export class MoreInfoDoctorComponent implements OnInit {

  constructor( @Inject(MD_DIALOG_DATA) public data: any, private doctorService: DoctorService, public dialog: MdDialog, private dialogRef: MdDialogRef<DoctorsInfoComponent>) { }
  public doctor: any;
  ngOnInit() {
    console.log(this.data)
    this.doctorService.doctorInfoById(this.data)
      .subscribe(result => {
        this.doctor = result;
        console.log(result);
      });
  }
  close() {

    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(result => {
    });
  }

}
