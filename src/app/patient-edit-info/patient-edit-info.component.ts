import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient/patient.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RoomInfoService } from '../services/room/room-info.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-patient-edit-info',
  templateUrl: './patient-edit-info.component.html',
  styleUrls: ['./patient-edit-info.component.css'],
  providers: [PatientService, RoomInfoService]
})
export class PatientEditInfoComponent implements OnInit {
  patient: any = {}
  messages :any={}
  floorAndRooms: any[] = [];
  floorRooms: any = []
  constructor(private roomInfoService: RoomInfoService, private route: ActivatedRoute, private patientService: PatientService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.patientService.patientInfoById(params.patientId)
        .subscribe(result => {
          this.patient = result;
          console.log(result);
        });
    });
  //   // my code 
  //   this.roomInfoService.roomInfo()
  //     .subscribe(result => {
  //       //console.log(result)
  //       let dataOfRomm = result;
  //       for (var i = 0; i < result.length; i++) {
  //         let rm: any;
  //         rm = dataOfRomm[i];
  //         let foundIndex = -1;
  //         foundIndex = _.findIndex(this.floorAndRooms, function (o) { return o.title == rm.floor })
  //         if (foundIndex < 0) {
  //           let obj = {
  //             title: rm.floor,
  //             rooms: [
  //               {
  //                 _id: rm._id,
  //                 roomNo: rm.roomNo
  //               }
  //             ]
  //           }
  //           this.floorAndRooms.push(obj)
  //         }
  //         else {
  //           this.floorAndRooms[foundIndex].rooms.push({
  //             _id: rm._id,
  //             roomNo: rm.roomNo
  //           })
  //         }

  //       }
  //       this.patient.floorAndRooms = this.floorAndRooms
  //       let flr = this.patient.floor;
  //        let frs =  _.find(this.floorAndRooms, function(o:any) {return o.title == flr});

  //       this.floorRooms = frs.rooms;

  //     })
  //   //end my code

   }

  editInfo() {
   
    let id = this.patient._id

   const patientInfo = _.omit(this.patient, ['__v', 'floorAndRooms', '_id', 'createdAt']);
   
    this.patientService.editPatient(id , patientInfo)
    .subscribe(result=>{
       if (result.statusCode == '400') {
          this.messages.err = result.message;
         let  __this = this;
          setTimeout(function() {
            __this.messages.err = null
          }, 4000);
          
        }
        else {
        
          this.messages.msg = "Patient Edited Successfully";
          let __this = this;
          setTimeout(function() {
            __this.messages.msg = null
          }, 2000);
          
          console.log(result)


        }
    })

  }

  // changeFloor(e: any) {
  //   let frs = _.find(this.floorAndRooms, function (o: any) {
  //     return o.title == e.value
  //   });
  //   this.floorRooms = frs.rooms;
  // }


}

