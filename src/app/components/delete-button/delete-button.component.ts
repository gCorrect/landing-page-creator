import { Component, Input } from '@angular/core';

@Component({
  selector: 'delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent {
  @Input() index: number = 0;
  @Input() deleteItem?: string;
  @Input() languages: any;
  @Input() linkSpecsOpen: any;
  
  delBtnPressed: boolean = false;
  
  delete(index: number){
    console.log('delete button pressed');
    for(let langIndex = 0; langIndex < this.languages.length; langIndex++){
      this.languages[langIndex].links.splice(index,1);
      this.linkSpecsOpen.splice(index,1);
    }
  }
}
