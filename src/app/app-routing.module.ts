import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmplistComponent } from './emplist/emplist.component';
import { LoginComponent } from './login/login.component';
import { PlayerDataComponent } from './player-data/player-data.component';
import { RegisterComponent } from './register/register.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  {path:'samp',component:SampleComponent},
{path:'emplist',component:EmplistComponent},
{path:'empadd',component:EmpAddComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
{path:'player-data',component:PlayerDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
