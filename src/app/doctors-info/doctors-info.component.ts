import { Component, OnInit } from '@angular/core';
import { DoctorService} from '../services/doctor/doctor.service';
import { MdDialog } from '@angular/material';
import { MoreInfoDoctorComponent } from '../more-info-doctor/more-info-doctor.component';
@Component({
  selector: 'app-doctors-info',
  templateUrl: './doctors-info.component.html',
  styleUrls: ['./doctors-info.component.css'],
  providers : [DoctorService]
})
export class DoctorsInfoComponent implements OnInit {
  doctors :any
  constructor(private  doctorService : DoctorService, public dialog: MdDialog) { }

  ngOnInit() {

     this.doctorService.doctorsInfo()
      .subscribe(result => {
       // console.log(result)
        this.doctors = result;
      });
  }
  openDialog(pId: string){
    let dialogRef = this.dialog.open(MoreInfoDoctorComponent, {
      data: pId
      
    });
  
  }
    // delete doctors record
    deleteRecord(id: any){
     let r =  confirm("Are you sure to delete")
     if(r==true){
      this.doctorService.deleteDoctorRecord({id})
      .subscribe(result => {

        if(result.ok == 1) {
          for(var r = 0; r < this.doctors.length; r++) {
            if(this.doctors[r]._id == id) {
              this.doctors.splice(r, 1);
            }
          }
        }

      });

     }
      

    }


}
