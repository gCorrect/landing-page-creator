// @angular
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//routing
import { AppRoutingModule } from './app-routing.module';
// external
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// components
import { AppComponent } from './app.component';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
import { LandingPageConverterComponent } from './components/landing-page-converter/landing-page-converter.component';
// Material
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    CKEditorModule,
    MatCheckboxModule,
  ],
  declarations: [
    AppComponent,
    LandingPageConverterComponent,
    DeleteButtonComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
