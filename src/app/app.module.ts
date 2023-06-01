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
import { EmailTemplReactiveComponent } from './components/email-templ-reactive/email-templ-reactive.component';
import { EmailTemplateComponent } from './components/email-template/email-template.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UsersListComponent } from './components/users-list/users-list.component';
// services
import { PreviewComponent } from './components/preview/preview.component';
import { UsersService } from './services/users.service';
import { LandingPageConverterComponent } from './components/landing-page-converter/landing-page-converter.component';
import { AttributeSetterComponent } from './components/attribute-setter/attribute-setter.component';
// Material
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'; 
import { MatOptionModule } from '@angular/material/core';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
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
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
  ],
  declarations: [
    AppComponent,
    UserSearchComponent,
    UsersListComponent,
    UserEditComponent,
    EmailTemplateComponent,
    EmailTemplReactiveComponent,
    PreviewComponent,
    LandingPageConverterComponent,
    AttributeSetterComponent,
    DeleteButtonComponent,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule { }
