import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL="http://localhost:8080/api/v1/students";

  constructor(private httpclient: HttpClient) { }

  getStudentsList(): Observable<Student[]>{
    return this.httpclient.get<Student[]>(this.baseURL);
  }
}
