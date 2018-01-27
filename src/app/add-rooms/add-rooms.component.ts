import { Component, OnInit } from '@angular/core';
import { AddRoomService } from '../services/room/add-room.service'
@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.css'],
  providers: [AddRoomService]
})
export class AddRoomsComponent implements OnInit {

  model = {};
  message: any;
  error : any;
  res: any;
  status = [
    "Free",
    "Busy",
  ];

  floor = [
    "first",
    "second",
    "third",
    "fourth",
    "Fifth"
  ];
  constructor(private addRoomService: AddRoomService) { }

  ngOnInit() {
  }

  addRoom() {

    this.addRoomService.addRoom(this.model)
      .subscribe(result => {
        console.log(result)

        if (result.statusCode == '400') {
          this.error = result.message;
          let __this = this;
          setTimeout(function(){
            __this.error = null
          },3000)
          console.log(result)
        }
        else if(result.statusCode == '500'){
           this.error = "Room Already Exist"
          let __this = this;
          setTimeout(function(){
            __this.error = null
          },3000)
          console.log(result)

        }
        else {
          
          this.message = "Room Added Successfully";
           let __this = this;
          setTimeout(function(){
            __this.message = null
          },3000)

        }

      });
  }

}
