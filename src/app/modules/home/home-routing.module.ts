import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SubmissionComponent } from './components/submission/submission.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'submission',
    component: SubmissionComponent
  }

  // {
  //   path: '',
  //   component: HomeComponent,
  //   children: [
  //     {
  //       path: 'submission',
  //       pathMatch: 'full',
  //       component: SubmissionComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
