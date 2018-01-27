import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaffService } from '../services/staff/staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-edit-info',
  templateUrl: './staff-edit-info.component.html',
  styleUrls: ['./staff-edit-info.component.css'],
  providers: [StaffService]
})
export class StaffEditInfoComponent implements OnInit {
  staff: any = {};
  public id : string;
  messages :any = {};
  gender = [
    "Male",
    "Female"
  ];
  public data: object;

  constructor(private route: ActivatedRoute, private staffService: StaffService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.staffService.staffInfoById(params.staffId)
        .subscribe(result => {
          this.staff = result;
         // console.log(this.staff);
        });
    });
  }

  editStaffInformation() {
    this.id = this.staff['_id'],
    this.data = {
      
      firstName: this.staff['firstName'],
      lastName: this.staff['lastName'],
      address: this.staff['address'],
      age: this.staff['age'],
      contact: this.staff['contact'],
      gender: this.staff['gender'],
      salary: this.staff['salary'],
      position: this.staff['position']

    }

    //console.log(this.data['id']);

     this.staffService.editStaff(this.id, this.data)
     .subscribe(result=>{
         if (result.statusCode == '400') {
          this.messages.err = result.message;
         let  __this = this;
          setTimeout(function() {
            __this.messages.err = null
          }, 3000);
         }
        else{
          this.messages.msg = "Staff Edited Successfully";
          let __this = this;
          setTimeout(function() {
            __this.messages.msg = null
          }, 2000);
        }
        
     })
    

  }
}
