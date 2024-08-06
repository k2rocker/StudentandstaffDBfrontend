import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Staff } from '../staffs';
import { StaffsService } from '../staffs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-staff',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-staff.component.html',
  styleUrl: './update-staff.component.css'
})
export class UpdateStaffComponent implements OnInit{
  stafftype:String='';
  id: number=1;
  staff : Staff=new Staff();
  
  constructor(private staffService: StaffsService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.stafftype=this.route.snapshot.params['stafftype'];
    this.id= this.route.snapshot.params['id'];
    this.staffService.getStaffById(this.id).subscribe(data=>{
      this.staff=data;
    },error=>console.log(error));
  }
  onSubmit(){
    console.log();
    this.staffService.updateStaffDetails(this.id,this.staff).subscribe(data=>{
      this.router.navigate([`/staffs/${this.stafftype}`]);
    })
  }
  
}
