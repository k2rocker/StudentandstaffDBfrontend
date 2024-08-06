import { Component, NgModule, OnInit } from '@angular/core';
import { Student } from '../playgroupstudent';
import { FormsModule } from '@angular/forms';
import { PlayschoolStudentService } from '../playgroupstudent.service';
import { error } from 'console';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent implements OnInit{

  studentclassval: String='';

  student:Student=new Student();

  constructor(private studentService: PlayschoolStudentService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void { 
    this.studentclassval=this.route.snapshot.params['studentclassval'];
  }


  goToStudentList(){
    this.router.navigate([`/students/${this.studentclassval}`]);
  }

  onSubmit(){
    console.log(this.student)
    this.saveStudent();
  }
  saveStudent(){
    this.studentService.createStudent(this.student).subscribe(data=>{
      console.log(data);
      this.goToStudentList();
    },error=>console.log(error));
  }

}
