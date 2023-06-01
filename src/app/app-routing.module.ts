// @angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { LandingPageConverterComponent } from './components/landing-page-converter/landing-page-converter.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
