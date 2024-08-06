import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-studentmainmenu',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './studentmainmenu.component.html',
  styleUrl: './studentmainmenu.component.css'
})
export class StudentmainmenuComponent {
  constructor(private router:Router,private route:ActivatedRoute){}
  onClickPlaygroup(){
    console.log();
      this.router.navigate(['/students/playgroupstudents']);
  }
  onClickPrekg(){
    console.log();
      this.router.navigate(['/students/prekgstudents']);
  }
  onClickLKG(){
    console.log();
      this.router.navigate(['/students/lkgstudents']);
  }
  onClickUKG(){
    console.log();
      this.router.navigate(['/students/ukgstudents']);
  }
  onClickExtracurricular(){
    console.log();
      this.router.navigate(['/studentsukgstudents']);
  }
}
