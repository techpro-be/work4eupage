import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { HomeComponent } from './modules/home/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: LayoutComponent,
    loadChildren: () => import('src/app/modules/home/home.module').then(m => m.HomeModule)
  },
  { path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
