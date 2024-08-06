import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Staff } from '../staffs';
import { StaffsService } from '../staffs.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-staff-list',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './staff-list.component.html',
  styleUrl: './staff-list.component.css'
})
export class StaffListComponent implements OnInit{

  staff: Staff[] =[{"id": 1,
		"month":"January",
    "phoneNumber":"9840575652",
    "salary":10000,
    "staffname":"karthik",
    "positiontype":"permanent"
}];

  stafftype:String='';
  searchTerm='';

  totalSalary:number =0;

  constructor(private staffService: StaffsService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.stafftype=this.route.snapshot.params['stafftype'];
  //  this.studentService.getTotalFeePaid(this.studentclassval).subscribe(data=>{
  //   this.totalFee=data;
  //  })
   this.getStaffs();
  }

  private getStaffs(){
    this.staffService.getStaffsList(this.stafftype).subscribe(data=>{
      this.staff=data;
    })
   }

   addStaffs(){
    this.router.navigate([`/createstaff/${this.stafftype}`]);
   }

   filteredStaffs() {
    this.staff=this.staff.filter(staff => 
      staff.staffname?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

   updateStaff(id: number){
    this.router.navigate([`/updatestaff`,this.stafftype,id]);
   }

   deleteStaff(id: number){
    this.staffService.deleteStaffDetails(id).subscribe(data=>{
      this.getStaffs();
    });
   }
}
