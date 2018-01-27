import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StaffService {

  constructor(private http : Http) { }


  staffInfo(): Observable <any>{
    return this.http.get('http://localhost:2222/api/staffInformation')
      .map(res => {
          return res.json(); 
        }
      )
      .catch (err => {
        return Observable.of(err.json())
      })

  }
    // add staff data
     addStaff(data :{}): Observable <any>{
    return this.http.post('http://localhost:2222/api/staff/addStaff', JSON.stringify(data))
      .map(res => {
          return res.json(); // {status: 'ok', data: savedData}
        }
      )
      .catch (err => {
        return Observable.of(err.json())
      })

  }
    // Delete Staff Data
     deleteStaff(id : any): Observable <any>{
       console.log(id)
    return this.http.post('http://localhost:2222/api/staff/deleteStaff' ,JSON.stringify({id}))
      .map(res => {
          return res.json(); // {status: 'ok', data: savedData}
        }
      )
      .catch (err => {
        return Observable.of(err)
      })

  }
    // Staff info by id
    staffInfoById(id : any): Observable <any>{
      return this.http.get(`http://localhost:2222/api/staff/getStaffById/${id}`, id)
      .map(res=>{
        return res.json();
      })
      .catch (err => {
        return Observable.of(err)
      })
    }
    //Eit Staff Data
    editStaff(id: string, data: any) : Observable  <any>{

      return this.http.put(`http://localhost:2222/api/staff/editStaffInformation/${id}`,JSON.stringify(data) )
      .map(res => {
          return res.json(); 
        }
      )
      .catch (err => {
        return Observable.of(err.json())
      })
      
    }
    

}
  

