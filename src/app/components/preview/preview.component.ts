import { Component, Input, ElementRef } from '@angular/core';
declare var saveAs: any;

@Component({
  selector: 'preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent {
  @Input() LOGO?: string;
  @Input() IMAGE?: string;
  @Input() TITLE?: string;
  @Input() TEXT?: string;
  @Input() mailType?: string;
  previewTemplate = '';

  elRef: ElementRef;

  constructor(elRef: ElementRef) {
    this.elRef = elRef;
  }

  elementExtractionFromString(previewStr: string, elStartTag: string, elEndTag: string ) {
    let elStartIndex = previewStr.indexOf(elStartTag);
    let elEndIndex = previewStr.indexOf(elEndTag);
    let endTagLength = elEndTag.length;
    let elHtmlStr = previewStr.substring(elStartIndex, elEndIndex+endTagLength);
    return elHtmlStr;
  }


  getHtmlContent() {
    this.previewTemplate = this.elRef.nativeElement.innerHTML;
    let btnHtmlStr = this.elementExtractionFromString(this.previewTemplate, "<button", "</button>");
    
    let previewTemplate = this.previewTemplate.replace(btnHtmlStr, "");
    this.previewTemplate = previewTemplate;

    return this.previewTemplate;
  }

  downloadTemplate() {
    this.getHtmlContent();
    console.log(this.previewTemplate);
    var blob = new Blob([this.previewTemplate], {
      type: 'text/plain;charset=utf-8',
    });
    new saveAs(blob, `${this.mailType}.html`);
  } // downloadTemplate() End
} //PreviewComponent End
