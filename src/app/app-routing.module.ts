// @angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { EmailTemplateComponent } from './components/email-template/email-template.component';
import { LandingPageConverterComponent } from './components/landing-page-converter/landing-page-converter.component';

const routes: Routes = [
  { path: 'user-search', component: UserSearchComponent },
  { path: 'user-search/update/:id', component: UserEditComponent },

  { path: 'email-template', component: EmailTemplateComponent },
  
  { path: 'landing-page-converter', component: LandingPageConverterComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
