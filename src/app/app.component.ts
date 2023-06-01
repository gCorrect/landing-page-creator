import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-project-anastasiou';

  encodedExampleHtml: string = '';

  constructor() {
    // this.encodedExampleHtml = getAnnotation(PreviewComponent).template;
  }
}
