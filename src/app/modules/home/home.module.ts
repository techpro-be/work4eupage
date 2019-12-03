import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { SubmissionComponent } from './components/submission/submission.component';
import { UserComponent } from './components/user/user.component';
import { CustomerComponent } from './components/customer/customer.component';
import { TermsComponent } from './components/terms/terms.component';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [
    HomeComponent,
    SubmissionComponent,
    UserComponent,
    CustomerComponent,
    TermsComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
