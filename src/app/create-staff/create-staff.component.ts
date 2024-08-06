import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Staff } from '../staffs';
import { StaffsService } from '../staffs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-staff',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-staff.component.html',
  styleUrl: './create-staff.component.css'
})
export class CreateStaffComponent {

  stafftype:String ='';
  
  staff:Staff=new Staff();

  constructor(private staffService: StaffsService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void { 
    this.stafftype=this.route.snapshot.params['stafftype'];
  }


  goToStaffList(){
    this.router.navigate([`/staffs/${this.stafftype}`]);
  }

  onSubmit(){
    this.saveStaff();
  }
  saveStaff(){
    this.staffService.createStaff(this.staff).subscribe(data=>{
      this.goToStaffList();
    },error=>console.log(error));
  }
}
