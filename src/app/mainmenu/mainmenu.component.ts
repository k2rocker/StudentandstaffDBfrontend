import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './mainmenu.component.html',
  styleUrl: './mainmenu.component.css'
})
export class MainmenuComponent {
  constructor(private router:Router,private route:ActivatedRoute){}
  onClickStudentsReport(){
    console.log();
      this.router.navigate(['/students']);
  }
  onClickStaffReport(){
    console.log();
      this.router.navigate(['/students']);
  }
  onClickMiscellaneousReport(){
    console.log();
      this.router.navigate(['/students']);
  }
}
