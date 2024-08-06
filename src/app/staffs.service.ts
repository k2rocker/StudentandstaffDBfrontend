import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './playgroupstudent';
import { Staff } from './staffs';

@Injectable({
  providedIn: 'root'
})
export class StaffsService {

 
  private baseURL="http://localhost:8080/api/v1/staffs";

  constructor(private httpclient: HttpClient) { }

  
  getStaffsList(stafftype: String): Observable<Staff[]>{
    return this.httpclient.get<Staff[]>(`${this.baseURL}/${stafftype}`);
  }
  createStaff(staff : Staff):Observable<Object>{
    return this.httpclient.post(this.baseURL,staff);
  }

  getStaffById(id:number):Observable<Staff>{
    return this.httpclient.get<Staff>(`${this.baseURL}/${id}`);
  }

  updateStaffDetails(id:number,staff:Staff):Observable<object>{
    return this.httpclient.put(`${this.baseURL}/${id}`,staff);
  }

  deleteStaffDetails(id:number):Observable<object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }
}
