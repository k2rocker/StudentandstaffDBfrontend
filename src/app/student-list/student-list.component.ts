import { Component, OnInit } from '@angular/core';
import { Student } from '../playgroupstudent';
import { NgFor,NgForOf } from '@angular/common';
import { PlayschoolStudentService } from '../playgroupstudent.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent implements OnInit{
  
  studentclassval: String='';

  students: Student[] =[{"id": 1,
		"studentname": "karthik",
    "phoneNumber":"9840575652",
		"feepaid": 30000,
		"status": "fully_paid",
  "studentclass": "Playgroup",
"bookfees":1000,
"discount":200
}];

  searchTerm='';

  totalFee:number =0;

  constructor(private studentService: PlayschoolStudentService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.studentclassval=this.route.snapshot.params['studentclassval'];
   this.studentService.getTotalFeePaid(this.studentclassval).subscribe(data=>{
    this.totalFee=data;
   })
   this.getStudents();
  }

  private getStudents(){
    this.studentService.getStudentsList(this.studentclassval).subscribe(data=>{
      this.students=data;
    })
   }

   addStudents(){
    this.router.navigate([`/createstudent/${this.studentclassval}`]);
   }

   filteredStudents() {
    this.students=this.students.filter(student => 
      student.studentname?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

   updateStudent(id: number){
    this.router.navigate([`updatestudent/${this.studentclassval}`,id]);
   }

   deleteStudent(id: number){
    this.studentService.deleteStudentDetails(id).subscribe(data=>{
      this.getStudents();
    });
   }
   
}
