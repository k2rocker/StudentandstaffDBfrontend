import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlayschoolStudentService } from '../playgroupstudent.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../playgroupstudent';
import { Observable } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent implements OnInit{

studentclassval: String='';  
id: number=1;
student : Student=new Student();

constructor(private studentService: PlayschoolStudentService,private router:Router,private route:ActivatedRoute){}
ngOnInit(): void {
  this.studentclassval=this.route.snapshot.params['studentclassval'];
  this.id= this.route.snapshot.params['id'];
  this.studentService.getStudentById(this.id).subscribe(data=>{
    this.student=data;
  },error=>console.log(error));
}
onSubmit(){
  console.log();
  this.studentService.updateStudentDetails(this.id,this.student).subscribe(data=>{
    this.router.navigate([`/students/${this.studentclassval}`]);
  })
}



}
