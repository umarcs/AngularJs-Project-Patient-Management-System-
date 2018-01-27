import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { MdDialog, MdDialogRef } from '@angular/material';
import { StaffInfoComponent } from '../staff-info/staff-info.component';
import { MD_DIALOG_DATA } from '@angular/material';
import { StaffService } from '../services/staff/staff.service';
@Component({
  selector: 'app-more-info-staff',
  templateUrl: './more-info-staff.component.html',
  styleUrls: ['./more-info-staff.component.css'],
  providers : [StaffService]
})
export class MoreInfoStaffComponent implements OnInit {

  constructor( @Inject(MD_DIALOG_DATA) public data: any, private staffService: StaffService, public dialog: MdDialog, private dialogRef: MdDialogRef<StaffInfoComponent>) { }
  public staff :any;
  ngOnInit() {
    this.staffService.staffInfoById(this.data)
    .subscribe(result => {
      this.staff = result;
     // console.log(this.staff);
    });
  }
  close() {
    
        this.dialogRef.close();
        this.dialogRef.afterClosed().subscribe(result => {
        });
      }

}

