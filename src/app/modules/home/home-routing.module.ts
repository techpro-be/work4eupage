import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SubmissionComponent } from './components/submission/submission.component';
import { UserComponent } from './components/user/user.component';
import { CustomerComponent } from './components/customer/customer.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  {
    path: 'submission',
    component: SubmissionComponent
  },
  {
    path: 'jobs',
    component: UserComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
