import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from '../services/staff/staff.service';
import { MdDialog } from '@angular/material';
import { MoreInfoStaffComponent } from '../more-info-staff/more-info-staff.component';
@Component({
  selector: 'app-staff-info',
  templateUrl: './staff-info.component.html',
  styleUrls: ['./staff-info.component.css'],
  providers : [StaffService]
})
export class StaffInfoComponent implements OnInit {

  constructor( private staffData : StaffService,  private routes  : Router, public dialog: MdDialog) { }
  staff :any;
  ngOnInit() {
    this.staffData.staffInfo()
      .subscribe(result => {
        this.staff = result;

      });
  }
  openDialog(pId: string){
    let dialogRef = this.dialog.open(MoreInfoStaffComponent, {
      data: pId
      
    });
  
  }
    //Delete Record
    
    deleteRecord(id: any){
      let r =  confirm("Are you sure to delete")
      if(r==true){
        this.staffData.deleteStaff(id)
        .subscribe(result => {
          if(result.ok == 1) {
            for(var r = 0; r < this.staff.length; r++) {
              if(this.staff[r]._id == id) {
                this.staff.splice(r, 1);
              }
            }
          }
  
        });
      }
      
    }
 
}
