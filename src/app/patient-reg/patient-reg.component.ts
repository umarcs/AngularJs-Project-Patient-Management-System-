import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { PatientService } from '../services/patient/patient.service';
import { RoomInfoService } from '../services/room/room-info.service';
import { CompleterService, CompleterData } from 'ng2-completer';
import { DoctorService } from "../services/doctor/doctor.service"

import * as _ from 'lodash';

@Component({
  selector: 'app-patient-reg',
  templateUrl: './patient-reg.component.html',
  styleUrls: ['./patient-reg.component.css'],
  providers: [PatientService, RoomInfoService, DoctorService]
})
export class PatientRegComponent implements OnInit {

  constructor(
    private doctorService : DoctorService,
    private roomInfoService: RoomInfoService,
    private routes: Router,
    private patientService: PatientService,
    private completerService: CompleterService) {
    this.dataService = completerService.local(this.searchData, 'firstName,value', 'firstName', );
  }
  public pattern :any;
  public contactClass: string = '';
  messages: any = {}
  public doctors:any=[];
  public search: any;
  model: any = {};
  pSearch: any = {}
  rooms: any = {}
  floorRooms: any = []
  gender = [
    'Male',
    'Female',
  ];
  sortedFloor: any[] = []
  floors: any[] = [];
  fineModel: any = {};

  
  /**
   * NG COMPLETER
   */


  protected searchStr: string;
  protected dataService: CompleterData;
  protected searchData: any = [
  ];

  protected onPSelected(item: any) {
    if (item.originalObject) {
      this.model = item.originalObject;
      this.model.patientId = item.originalObject._id;
      console.log(this.model)
      this.checkPattern(this.model.contact)

    }
  }

  checkPattern(value :any){

    this.pattern = /(\b(300)|(301)|(302)|(303)|(304)|(305)|(306)|(307)|(308)|(309)|(331)|(332)|(333)|(334)|(335)|(336)|(337)|(320)|(321)|(322)|(323)|(324)|(325)|(311)|(312)|(313)|(314)|(315)|(340)|(341)|(342)|(343)|(344)|(345)|(346)|(347)|(355))+([0-9]{7}\b)/g.test(value)
    console.log(this.pattern)
    this.contactClass = (this.pattern) ? "" : "mat-input-invalid ng-invalid";
    console.log("this.contactClass",this.contactClass);
    return !this.contactClass;
  }

  ngOnInit() {
    //doctors
      this.doctorService.doctorsInfo()
      .subscribe(result=>{
        console.log(result);
        this.doctors = result;
      })

    //end doctors
    this.roomInfoService.roomInfo()
      .subscribe(result => {
        this.rooms = result;
        let rm: any;
        let foundIndex = -1;
        for (var i = 0; i < this.rooms.length; i++) {
          rm = this.rooms[i]
          //foundIndex = this.floors.indexOf(rm.floor);
          foundIndex = _.findIndex(this.floors, function (o: any) { return o.title == rm.floor; });

          if (foundIndex < 0) {
            let flrObj = {
              title: rm.floor,
              rooms: [
                {
                  _id: rm._id,
                  roomNo: rm.roomNo,
                  price: rm.price
                }
              ]
            }
            this.floors.push(flrObj)
          } else {
            this.floors[foundIndex].rooms.push({
              _id: rm._id,
              roomNo: rm.roomNo,
              price: rm.price
            })
          }

        }
        this.model.floors = this.floors;
        // console.log(this.model.floors)
        // for(var i=0; i<this.floors.length; i++){
        //   this.sortedFloor.push(this.floors[i].title)
        // }
        // let allSortedFloors = this.sortedFloor.sort();
        // console.log("sorted floor",allSortedFloors)
      });
  }

  public error: any;

  patientReg() {

    console.log(this.model)
    const isValidContact = this.checkPattern(this.model.contact);
    console.log('is valid contact', isValidContact);
    if(!isValidContact) return;
    this.fineModel = _.omit(this.model, ['createdAt', 'floors', '_id', '__v']);
    console.log("my sweat",this.fineModel)

    //delete this.model.floors
    this.patientService.patientReg(this.fineModel)
      .subscribe(result => {
        let data = result;
        console.log("helo toba",result);
        if (result.statusCode == '400') {
          this.messages.err = result.message;
          let __this = this;
          setTimeout(function () {
            __this.messages.err = null
          }, 3000);
        }
        else {
          this.messages.msg = "Patient Added Successfully";
          let __this = this;
      
          setTimeout(function () {
         let id = data.pData._id;
          console.log("herh id is",id)
        
          __this.routes.navigate(['/admin/invoice', id]);

            __this.messages.msg = null
            __this.model = {};
          }, 1000);
        }

      });
      console.log(this.model)
  }


  changeFloor(e: any) {
    let frs = _.find(this.floors, function (o: any) {
      return o.title == e.value
    });
    this.floorRooms = frs.rooms;
    // console.log(this.floorRooms)
  }

  changeRoom(e: any) {

    console.log(e.value, this.floorRooms)
    for (var i = 0; i < this.floorRooms.length; i++) {
      if (e.value == this.floorRooms[i].roomNo) {
        this.model.price = this.floorRooms[i].price;
      }
    }
  }

  onPChange(e: any) {
    console.log(e)
    console.log("l", this.searchStr)
    if (this.searchStr) {
      this.patientService.searchPatient(this.searchStr)
        .subscribe(result => {
          this.searchData = result.data
          this.dataService = result.data
          console.log("result is ", this.searchData);
          console.log(this.searchData)
          this.dataService = this.completerService.local(this.searchData, 'firstName,lastName', 'firstName,lastName,contact');


        })
    }
      else{
          this.model = {}
      }


  }
}
