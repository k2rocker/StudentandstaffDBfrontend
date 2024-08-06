import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-staffmainmenu',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './staffmainmenu.component.html',
  styleUrl: './staffmainmenu.component.css'
})
export class StaffmainmenuComponent {
  constructor(private router:Router,private route:ActivatedRoute){}
  onClickPermanentstaffs(){
    console.log();
      this.router.navigate(['/staffs/permanent']);
  }
  onClickTrainees(){
    console.log();
      this.router.navigate(['/staffs/trainee']);
  }
  onClickTeachertraining(){
    console.log();
      this.router.navigate(['/staffs']);
  }
}
