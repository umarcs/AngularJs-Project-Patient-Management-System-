import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomInfoService } from '../services/room/room-info.service';
import { DeleteRoomService } from '../services/room/delete-room.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.css'],
  providers: [RoomInfoService, DeleteRoomService]
})
export class RoomInfoComponent implements OnInit {

  constructor(private roomInfoService : RoomInfoService,private deleteRoomService: DeleteRoomService ,private routes : Router, ) { }
   public rooms : any;
  ngOnInit() {
    
     this.roomInfoService.roomInfo()
      .subscribe(result => {
       // console.log(result)
       let sortedRooms=  _.sortBy(result, [function(o:any) { return o.roomNo; }]);
      
        this.rooms = sortedRooms;

      });
  }
  deleteRoomRecord(id : any){
    let r = confirm("Are you sure")
    if(r==true){
      this.deleteRoomService.deleteRoom(id)
      .subscribe(result => {

        if(result.ok == 1) {
          for(var r = 0; r < this.rooms.length; r++) {
            if(this.rooms[r]._id == id) {
              this.rooms.splice(r, 1);
            }
          }
        }

      });
    }
   
  }
 
}
