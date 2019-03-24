import { Component } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Input } from '@angular/core';
import { FormModel } from '../../model/formModel'

@Component({
  selector: 'rocket-form',
  templateUrl: './rocket.form.component.html',
  styleUrls: ['./rocket.form.component.css']
})
export class RocketForm {
  @Input() model:FormModel;

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