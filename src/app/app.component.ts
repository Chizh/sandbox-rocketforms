import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormModel } from './model/formModel'
import { BaseFormElement } from './model/formElementModel/baseFromElement'
import { Input } from './model/formElementModel/input'
import { CheckBox } from './model/formElementModel/checkbox'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  
  formModel = new FormModel({
    rows: [
      new Input({name: "first"}),
      new CheckBox({name: "second"}),
      new Input({name: "third"}),
      new CheckBox({name: "forth"})
    ]});

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }
}
