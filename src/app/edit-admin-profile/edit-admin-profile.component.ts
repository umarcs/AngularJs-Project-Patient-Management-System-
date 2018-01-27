import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DoctorService } from "../services/doctor/doctor.service"
@Component({
  selector: 'app-edit-admin-profile',
  templateUrl: './edit-admin-profile.component.html',
  styleUrls: ['./edit-admin-profile.component.css'],
  providers: [DoctorService]

})
export class EditAdminProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private doctorService: DoctorService) { }
   messages :any = {};
 
    ngOnInit() {
    this.route.params.subscribe(params => {
      this.doctorService.doctorInfoById(params.doctorId)
        .subscribe(result => {
          //this.doctor = result;
         // console.log(result);
        });
    });
  }

}








 
//   editInfo() {
//     let id = this.doctor._id;
//     this.model = {
//       firstName: this.doctor.firstName,
//       lastName: this.doctor.lastName,
//       degree: this.doctor.degree,
//       position: this.doctor.position,
//       salary: this.doctor.salary,
//       email: this.doctor.email,
//       age: this.doctor.age,
//       address: this.doctor.address,
//       contact: this.doctor.contact,
//       gender: this.doctor.gender

//     }
//     this.doctorService.editDoctor(id, this.model)
//     .subscribe(result=>{
//          if (result.statusCode == '400') {
//           this.messages.err = result.message;
//          let  __this = this;
//           setTimeout(function() {
//             __this.messages.err = null
//           }, 4000);
//          }
//         else{
//           this.messages.msg = "Doctor Edited Successfully";
//           let __this = this;
//           setTimeout(function() {
//             __this.messages.msg = null
//           }, 2000);
//         }




//     })

//   }

// }