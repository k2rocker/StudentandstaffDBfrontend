import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { NgFor,NgForOf } from '@angular/common';
import { StudentService } from '../student.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent implements OnInit{
  
  students: Student[] | undefined;

  constructor(private studentService: StudentService){}

  ngOnInit(): void {
   this.getStudents();
  }

  private getStudents(){
    this.studentService.getStudentsList().subscribe(data=>{
      this.students=data;
    })
   }

}
