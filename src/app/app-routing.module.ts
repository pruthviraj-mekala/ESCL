import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomeComponentComponent } from './home-component/home-component.component';
import { HomeComponent } from './home/home.component';
import { CrickClubComponent } from './crick-club/crick-club.component';
import { UsaCricketComponent } from './usa-cricket/usa-cricket.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'crickclub',component:CrickClubComponent},
  {path:'usacricket',component:UsaCricketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
