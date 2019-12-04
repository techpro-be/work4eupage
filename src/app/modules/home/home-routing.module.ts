import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SubmissionComponent } from '../../shared/components/submission/submission.component';
import { UserComponent } from './components/user/user.component';
import { CustomerComponent } from './components/customer/customer.component';
import { TermsComponent } from '../../shared/components/terms/terms.component';
import { ServicesComponent } from './components/services/services.component';
import { PrivacyComponent } from 'src/app/shared/components/privacy/privacy.component';


const routes: Routes = [
  {
    path: 'submission',
    pathMatch: 'full',
    component: SubmissionComponent
  },
  {
    path: 'jobs',
    pathMatch: 'full',
    component: UserComponent
  },
  {
    path: 'contact',
    pathMatch: 'full',
    component: CustomerComponent
  },
  {
    path: 'terms',
    pathMatch: 'full',
    component: TermsComponent
  },
  {
    path: 'services',
    pathMatch: 'full',
    component: ServicesComponent
  },
  {
    path: 'privacy',
    pathMatch: 'full',
    component: PrivacyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
