import { Component, OnInit } from '@angular/core';
import { StaffService } from '../services/staff/staff.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css'],
  providers : [StaffService]
})
export class AddStaffComponent implements OnInit {

  constructor(private staffService : StaffService ) { }
  model :any = {};
  public pattern :any;  
  public contactClass :string = ''; 
  infoMessage : any;
  error : any;
  gender = [
    "Male",
    "Female"
  ];
  position=["Nurse" , "Sweeper" , "Accountant", "Guard"];
  ngOnInit() {
  }
  //phone patttern
  checkPattern(value :any){
    
        this.pattern = /(\b(300)|(301)|(302)|(303)|(304)|(305)|(306)|(307)|(308)|(309)|(331)|(332)|(333)|(334)|(335)|(336)|(337)|(320)|(321)|(322)|(323)|(324)|(325)|(311)|(312)|(313)|(314)|(315)|(340)|(341)|(342)|(343)|(344)|(345)|(346)|(347)|(355))+([0-9]{7}\b)/g.test(value)
        console.log(this.pattern)
        this.contactClass = (this.pattern) ? "" : "mat-input-invalid ng-invalid";
        console.log("this.contactClass",this.contactClass);
        return !this.contactClass;
      }
  addStaff() {
    const isValidContact = this.checkPattern(this.model.contact);
    console.log('is valid contact', isValidContact);
    if(!isValidContact) return;
    this.staffService.addStaff(this.model)
      .subscribe(result => {

        if (result.statusCode == '400') {
          this.error = result.message;
          let __this = this;
          setTimeout(function(){
            __this.error = null
          },3000)
          console.log(result)
        }
        else {
          this.infoMessage = "staff Added Successfully";
           let __this = this;
          setTimeout(function(){
            __this.infoMessage = null
            __this.model = {}
          },3000)

        }

      });
  }
}
