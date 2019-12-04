import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidenavListComponent } from '../components/sidenav-list/sidenav-list.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { SubmissionComponent } from '../components/submission/submission.component';
import { TermsComponent } from '../components/terms/terms.component';
import { PrivacyComponent } from '../components/privacy/privacy.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations:
  [
    HeaderComponent,
    SidenavListComponent,
    NotFoundComponent,
    LayoutComponent,
    SubmissionComponent,
    TermsComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    FlexLayoutModule,
    FormsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    HeaderComponent,
    SidenavListComponent,
    NotFoundComponent,
    LayoutComponent,
    SubmissionComponent,
    TermsComponent,
    PrivacyComponent
  ]
})
export class SharedModule { }
