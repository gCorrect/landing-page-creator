//@angular
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
//external
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// models
import { EmailInfo, MailType } from '../../models/emailInfo.model';
// services
import { EmailInfoService } from '../../services/email-info.service';

@Component({
  selector: 'email-templ-reactive',
  templateUrl: './email-templ-reactive.component.html',
  styleUrls: ['./email-templ-reactive.component.scss'],
})
export class EmailTemplReactiveComponent {
  logo = new FormControl('');
  image = new FormControl('');
  mailType = new FormControl('');
  title = new FormControl('');
  text = new FormControl('');
  titleGr = new FormControl('');
  textGr = new FormControl('');
  // ===============================
  public Editor: any = ClassicEditor;

  constructor(
    private emailInfoService: EmailInfoService,
    private location: Location
  ) { }

  emailInfo: EmailInfo = {
    logo: '',
    image: '',
    mailType: MailType.CONFIRM,
    title: '',
    text: '',
    titleGr: '',
    textGr: '',
  };

  submit() {
    if (this.emailInfo) {
      this.emailInfoService
        .addEmailInfo(this.emailInfo)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
