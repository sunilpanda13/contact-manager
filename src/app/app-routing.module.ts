import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { AddComponent } from './contact/add/add.component';
import { EditComponent } from './contact/edit/edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"signIn",component:SignInComponent},
  {path:"register",component:RegisterComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuardService]},
  {path:"add",component:AddComponent,canActivate:[AuthGuardService]},
  {path:"contact/update/:id",component:EditComponent,canActivate:[AuthGuardService]},
  {path:"**",component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
