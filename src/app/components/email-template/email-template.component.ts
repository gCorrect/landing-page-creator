//@angular
import { Component, Renderer2, ViewContainerRef, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import { getAnnotation } from '../preview/annotation';
//external
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// models
import { EmailInfo, MailType } from '../../models/emailInfo.model';
// services
import { EmailInfoService } from '../../services/email-info.service';

declare var saveAs: any;
@Component({
  selector: 'email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class EmailTemplateComponent implements OnInit {
  // Variables
  public Editor: any = ClassicEditor;

  emailInfo: EmailInfo = {
    logo: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back02.jpg',
    image: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    mailType: MailType.CONFIRM,
    title: 'Reservation Confirmation',
    text: '',
    titleGr: 'Επιβεβαίωση Κράτησης',
    textGr: '',
    noReply: 'Please do not directly reply to this email address ("No-Reply")',
    noReplyGr: 'Παρακαλώ μην απαντήσετε σε αυτό το email ("No-Reply")',
  };

  titleValue: string = '';
  titleGrValue: string = '';

  isEnglish: boolean = false;
  isGreek: boolean = true;

  previewTemplate = '';

  previewComp = document.getElementById("preview");

  // Functions
  constructor(
    private emailInfoService: EmailInfoService,
    private renderer: Renderer2,
    public sanitizer: DomSanitizer,
    private viewContainerRef: ViewContainerRef,
  ) {
    // this.encodedExampleHtml = getAnnotation(PreviewComponent).template;

  }

  ngOnInit(): void {
    this.updatePreviewTemplate();
  }
  titleValues(): void {
    let mailType = this.emailInfo.mailType;

    // switch
    switch (mailType) {
      case MailType.CONFIRM: {
        this.emailInfo.title = 'Reservation Confirmation';
        this.emailInfo.titleGr = 'Επιβεβαίωση Κράτησης';
        break;
      }
      case MailType.CANCEL: {
        this.emailInfo.title = 'Reservation Cancellation';
        this.emailInfo.titleGr = 'Ακύρωση Κράτησης';
        break;
      }
      case MailType.REMINDER: {
        this.emailInfo.title = 'Reservation Reminder';
        this.emailInfo.titleGr = 'Υπενθύμιση Κράτησης';
        break;
      }
      case MailType.DEPOSIT: {
        this.emailInfo.title = 'Payment Request';
        this.emailInfo.titleGr = 'Αίτημα Πληρωμής';
        break;
      }
      case MailType.CARDDETAILS: {
        this.emailInfo.title = 'Credit Card Details Request';
        this.emailInfo.titleGr = 'Αίτημα Καταχώρησης Κάρτας';
        break;
      }
      default: {
        this.emailInfo.title = 'Reservation Confirmation';
        this.emailInfo.titleGr = 'Επιβεβαίωση Κράτησης';
        console.log("mailType " + mailType)
        console.log("mailType def " + MailType.CONFIRM)
        break;
      }
    }

    // if (mailType == MailType.CONFIRM) {
    //   this.emailInfo.title = 'Reservation Confirmation';
    //   this.emailInfo.titleGr = 'Επιβεβαίωση Κράτησης';
    // } else if (mailType == MailType.CANCEL) {
    //   this.emailInfo.title = 'Reservation Cancellation';
    //   this.emailInfo.titleGr = 'Ακύρωση Κράτησης';
    // } else if (mailType == MailType.REMINDER) {
    //   this.emailInfo.title = 'Reservation Reminder';
    //   this.emailInfo.titleGr = 'Υπενθύμιση Κράτησης';
    // } else if (mailType == MailType.DEPOSIT) {
    //   this.emailInfo.title = 'Payment Request';
    //   this.emailInfo.titleGr = 'Αίτημα Πληρωμής';
    // } else if (mailType == MailType.CARDDETAILS) {
    //   this.emailInfo.title = 'Credit Card Details Request';
    //   this.emailInfo.titleGr = 'Αίτημα Καταχώρησης Κάρτας';
    // }
  } // titleValues() End

  setToEnglish() {
    this.isGreek = false;
    this.isEnglish = !this.isEnglish;
  } // setToEnglish() End

  setToGreek() {
    this.isEnglish = false;
    this.isGreek = !this.isGreek;
  } // setToGreek() End

  updatePreviewTemplate() {
    let logo = this.emailInfo.logo;
    let image = this.emailInfo.image;
    let title: string | undefined;
    let text: string | undefined;
    let noReply: string | undefined;

    // if (this.isEnglish) {
    //   title = this.emailInfo.title;
    //   text = this.emailInfo.text;
    //   noReply = this.emailInfo.noReply;
    // } else {
    //   title = this.emailInfo.titleGr;
    //   text = this.emailInfo.textGr;
    //   noReply = this.emailInfo.noReplyGr;
    // }

    title = this.isEnglish ? this.emailInfo.title : this.emailInfo.titleGr;
    text = this.isEnglish ? this.emailInfo.text : this.emailInfo.textGr;
    noReply = this.isEnglish ? this.emailInfo.noReply : this.emailInfo.noReplyGr;

    let previewTemplate = `  <!-- Background -->
    <div style="font-family: sans-serif!important; background-color: #dbdbdb;padding: 15px; color: #303030">
      <!-- Content Container -->
      <div
           style="box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);background-color: white; width: 660px; max-width: 95%; margin: 15px auto; border-radius: 5px;padding: 15px; line-height: 24px;">

        <img *ngIf="${logo}" style="max-width: 50%; max-height: 100px; margin: 10px auto; display: block;" src="${logo}">

        <!-- Image -->
        <img *ngIf="${image}" style="max-height: 260px;
      max-width: 100%;
      object-fit: contain;
      object-position: center;
      margin-bottom: 5px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.24), 0 1px 2px rgba(0, 0, 0, 0.24);
      border-radius: 5px;
      margin: 0 auto;
      display: block;
      margin-bottom: 25px;" src="${image}">


        <!-- Heading -->
        <h1 style="text-align: center; font-size: 20px;text-align: center;
    font-size: 25px;
    border-bottom: 2px dashed #ccc;
    padding-bottom: 15px;">${title}</h1>


        <!-- Text -->
        <div style="border-bottom: 2px dashed #ccc; padding-bottom: 15px;">


          <!-- CONTENT START -->

          ${text}

          <!-- CONTENT END -->


        </div>

        <!-- Notes -->
        <div style="padding-top: 15px;padding-bottom: 15px;">

          ※ ${noReply} <br /><br />
        </div>


      </div>

      <!-- Powered by -->
      <span style="margin: 40px auto;
    display: block;
    text-align: center;
    margin-bottom: 15px;
    color: #646464;
    font-size: 12px;
    font-family: serif;">powered by</span>
      <a href="https://i-host.io">
        <img style="margin: 0px auto; display: block; width: 100px; margin-bottom: 20px"
             src="https://www.i-host.gr/Content/img/ihost-full-black.png">
      </a>
    </div>
    `;
    this.previewTemplate = previewTemplate;
  } //updatePreviewTemplate() End

  downloadTemplate() {
    var blob = new Blob([this.previewTemplate],
      { type: "text/plain;charset=utf-8" });
    new saveAs(blob, `${this.emailInfo.mailType}.html`);
  }// downloadTemplate() End

} // EmailTemplateComponent End

// =================NOTES==========================

  // @ViewChild('preview') d1: ElementRef<HTMLInputElement> = {} as ElementRef;

  // encodedExampleHtml: string = 'encodedExampleHtml'; 


  // const d2 = this.renderer.createElement('div');
    // this.d1.nativeElement.append(this.previewTemplate);
    // d2.append("p");
    // this.d1.nativeElement.appendChild(d2);
    // this.d1.nativeElement.insertAdjacentHTML('beforeend', this.previewTemplate);
    // const text = this.renderer.createText(this.previewTemplate);
    // this.renderer.appendChild(d2, text);
    // this.renderer.appendChild(this.d1.nativeElement, d2);

// getComponentTemplate(componentType: any): any {

//   // Create a new instance of the component and attach it to the ViewContainerRef
//   const componentRef = this.viewContainerRef.createComponent(PreviewComponent);

//   // Get the template code as a string
//   const template = componentRef.location;

//   // Destroy the component instance
//   componentRef.destroy();

//   // Return the template code
//   return template;
// }
