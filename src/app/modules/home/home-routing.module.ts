import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SubmissionComponent } from './components/submission/submission.component';
import { UserComponent } from './components/user/user.component';
import { CustomerComponent } from './components/customer/customer.component';
import { TermsComponent } from './components/terms/terms.component';
import { ServicesComponent } from './components/services/services.component';


const routes: Routes = [
  {
    path: 'submission',
    component: SubmissionComponent
  },
  {
    path: 'jobs',
    component: UserComponent
  },
  {
    path: 'contact',
    component: CustomerComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
