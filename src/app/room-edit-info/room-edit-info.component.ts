import { Component, OnInit } from '@angular/core';
import { RoomInfoService } from '../services/room/room-info.service';
import { ActivatedRoute } from '@angular/router';
import { GetInfoBeforeEditService } from '../services/room/get-info-before-edit.service';
import { EditRoomService } from '../services/room/edit-room.service';

@Component({
  selector: 'app-room-edit-info',
  templateUrl: './room-edit-info.component.html',
  styleUrls: ['./room-edit-info.component.css'],
  providers: [EditRoomService, GetInfoBeforeEditService]
})
export class RoomEditInfoComponent implements OnInit {
  model: any
  public id: any;
  messages : any={};
  private sub: any;
  public room: object = {};
  public roomObject: Object;
  constructor(private route: ActivatedRoute, private getInfoBeforeEditService: GetInfoBeforeEditService, private editRoomService: EditRoomService) { }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params;
      this.getInfoBeforeEditService.roomInfo(params)
        .subscribe(result => {
          this.room = result;

        });
    });
  }

  editRoom() {
    this.roomObject = {

      floor: this.room['floor'],
      roomNo: this.room['roomNo'],
      noOfBeds: this.room['noOfBeds'],
      status: this.room['status'],
      price: this.room['price'],
    }
    
    this.editRoomService.editRoomData(this.room['_id'], this.roomObject)
      .subscribe(result => {
        
        if (result.statusCode == '400') {
          this.messages.err = result.message;
         let  __this = this;
          setTimeout(function() {
            __this.messages.err = null
          }, 4000);
          
        }
        else if(result.statusCode == '500'){
          this.messages.err = "Room Already Exist"
         let __this = this;
         setTimeout(function(){
           __this.messages.err = null
         },3000)
         console.log(result)
        }
        else {
        
          this.messages.msg = "Room Edited Successfully";
          let __this = this;
          setTimeout(function() {
            __this.messages.msg = null
          }, 2000);
          
          console.log(result)


        }

      });

  }
}

