import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentmainmenuComponent } from './studentmainmenu/studentmainmenu.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { StaffmainmenuComponent } from './staffmainmenu/staffmainmenu.component';
import { MiscellaneousmainmenuComponent } from './miscellaneousmainmenu/miscellaneousmainmenu.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';

export const routes: Routes = [
    {path: 'students/:studentclassval',component: StudentListComponent},
    {path:'createstudent/:studentclassval',component:CreateStudentComponent},
    {path:'updatestudent/:studentclassval/:id',component:UpdateStudentComponent},
    {path: 'studentmainmenu',component: StudentmainmenuComponent},
    {path: 'staffmainmenu',component: StaffmainmenuComponent},
    {path: 'miscellaneousmainmenu',component: MiscellaneousmainmenuComponent},
    {path: 'mainmenu',component: MainmenuComponent},
    {path: 'staffs/:stafftype',component: StaffListComponent},
    {path: 'createstaff/:stafftype',component: CreateStaffComponent},
    {path: 'updatestaff/:stafftype/:id',component: UpdateStaffComponent},
    {path: '', redirectTo: 'mainmenu',pathMatch: 'full'}
];
