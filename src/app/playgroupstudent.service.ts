import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './playgroupstudent';

@Injectable({
  providedIn: 'root'
})
export class PlayschoolStudentService {

  private baseURL="http://localhost:8080/api/v1/playgroupstudents";
  private baseURLForTotal="http://localhost:8080/api/v1/playgroupstudentstotal";
  private baseURLForGetList="http://localhost:8080/api/v1/students";

  constructor(private httpclient: HttpClient) { }

  getStudentsList(studentclassval:String): Observable<Student[]>{
    return this.httpclient.get<Student[]>(`${this.baseURLForGetList}/${studentclassval}`);
  }
  createStudent(student: Student):Observable<Object>{
    return this.httpclient.post(this.baseURL,student);
  }

  getStudentById(id:number):Observable<Student>{
    return this.httpclient.get<Student>(`${this.baseURL}/${id}`);
  }

  updateStudentDetails(id:number,student:Student):Observable<object>{
    return this.httpclient.put(`${this.baseURL}/${id}`,student);
  }

  deleteStudentDetails(id:number):Observable<object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }

  getTotalFeePaid(studentclassval:String):Observable<number>{
    return this.httpclient.get<number>(`${this.baseURLForTotal}/${studentclassval}`);
  }


}
